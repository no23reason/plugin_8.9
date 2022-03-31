// (C) 2021 GoodData Corporation
import {
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
    IDashboardEventHandling,
    IDashboardWidgetProps,
    newDashboardSection,
    newDashboardItem,
    newCustomWidget,
    CustomDashboardWidgetComponent,
    DashboardEventBody,
    ICustomDashboardEvent,
    ICustomWidget,
    useCustomWidgetExecutionDataView,
    useDashboardEventDispatch,
    changeAttributeFilterSelection,
    changeDateFilterSelection,
    clearDateFilterSelection,
    resetAttributeFilterSelection,
    selectFilterContextAttributeFilterByDisplayForm,
    useDashboardSelector,
    useDispatchDashboardCommand,
    changeFilterContextSelection,
} from "@gooddata/sdk-ui-dashboard";
import {
    Legend,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import entryPoint from "../dp_tiger_v_89_parent_entry";
import {Price, OrderId_1, Region, Insights} from "../md/full";
import React from "react";
import {attributeDisplayFormRef, idRef, newNegativeAttributeFilter, newRelativeDateFilter } from "@gooddata/sdk-model";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { max } from "lodash";
import { InsightView } from "@gooddata/sdk-ui-ext";

//const Price: IMeasure<IMeasureDefinition> = newMeasure(idRef("price", "measure"));
//const Region: IAttribute = newAttribute("qa__customers.REGION");

function MyCustomWidget(_props: IDashboardWidgetProps): JSX.Element {
    return <div>Hello from custom widget</div>;
}

type MyCustomEvent = ICustomDashboardEvent<{ greeting: string }>;
const TestWidget: React.FC = () => {
    const dispatch = useDashboardEventDispatch();
    return (
        <button
            type="button"
            onClick={() => {
                // trigger the custom event
                const event: DashboardEventBody<MyCustomEvent> = {
                    // custom event names must start with `CUSTOM/EVT` prefix
                    type: "CUSTOM/EVT/MY_EVENT",
                    payload: {
                        greeting: "hello",
                    },
                };
                dispatch(event);
            }}
        >
            Trigger custom event
        </button>
    );
};

const BarChartExample: React.FC = () => {
    return (
        <div style={{height: "100%"}} >
            <BarChart measures={[Price.Sum]} viewBy={Region} />
        </div>
    );
};

const Insight: React.FC = () => {
    return (
        <div style={{height: "100%"}} >
            <InsightView insight={Insights.AdParent}/>
        </div>
    );
};

const simpleCurrencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
});

//const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("order_amount", "measure"));
//const Quantity: IMeasure<IMeasureDefinition> = newMeasure(idRef("quantity", "measure"));
const MyCustomWidgetWithFilters: CustomDashboardWidgetComponent = ({ widget, LoadingComponent, ErrorComponent }) => {
    const dataViewTask = useCustomWidgetExecutionDataView({
        widget: widget as ICustomWidget,
        execution: {
            seriesBy: [Price.Sum, OrderId_1],
            slicesBy: [Region],
        },
    });

    if (dataViewTask.status === "pending" || dataViewTask.status === "loading") {
        return <LoadingComponent />;
    }

    if (dataViewTask.status === "error") {
        return <ErrorComponent message={dataViewTask.error.message ?? "Unknown error"} />;
    }

    const data = dataViewTask.result
        .data()
        .slices()
        .toArray()
        .map((slice) => {
            const rawTotalSales = slice.dataPoints()[0].rawValue;
            const rawFranchisedSales = slice.dataPoints()[1].rawValue;
            return {
                title: slice.descriptor.sliceTitles()[0],
                totalSales: rawTotalSales ? parseFloat(rawTotalSales.toString()) : 0,
                franchisedSales: rawFranchisedSales ? parseFloat(rawFranchisedSales.toString()) : 0,
            };
        });

    const maxValue = max(data.map((i) => max([i.totalSales, i.franchisedSales])))!;

    return (
        <ResponsiveContainer height={240} width="90%">
            <RadarChart data={data}>
                <PolarGrid color="#94a1ad" />
                <PolarAngleAxis dataKey="title" color="#94a1ad" />
                <PolarRadiusAxis
                    angle={90}
                    color="#94a1ad"
                    domain={[0, maxValue]}
                    tickFormatter={simpleCurrencyFormatter.format}
                />
                <Radar name="bop" dataKey="totalSales" stroke="#14b2e2" fill="#14b2e2" fillOpacity={0.6} />
                <Radar
                    name="eop"
                    dataKey="franchisedSales"
                    stroke="#00c18e"
                    fill="#00c18e"
                    fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
};

const changeFilterDashboard: CustomDashboardWidgetComponent = () => {
    /**
     * Creating necessary commands to dispatch filter selection change related commands.
     */
    const changeAttributeFilterSelectionCmd = useDispatchDashboardCommand(changeAttributeFilterSelection);
    const resetAttributeFilter = useDispatchDashboardCommand(resetAttributeFilterSelection);
    const changeDateFilterSelectionCmd = useDispatchDashboardCommand(changeDateFilterSelection);
    const resetDateFilter = useDispatchDashboardCommand(clearDateFilterSelection);
    const changeFilterContextSelectionCmd = useDispatchDashboardCommand(changeFilterContextSelection);

    /**
     * Select the attribute filter's local identifier from the filter's display form.
     */
    const ProductFilterLocalId = useDashboardSelector(
        selectFilterContextAttributeFilterByDisplayForm(
            idRef("customers.region"),
        ),
    )?.attributeFilter.localIdentifier;

    const changeProductFilterSelection = () => {
        ProductFilterLocalId &&
            changeAttributeFilterSelectionCmd(
                ProductFilterLocalId,
                {
                    //explore, phoenix
                    uris: [
                        "Midwest",
                        "Northeast",
                    ],
                },
                "IN",
            );
    };

    const resetProductFilterSelection = () => {
        ProductFilterLocalId && resetAttributeFilter(ProductFilterLocalId);
    };

    const changeDashboardDateFilterSelection = () => {
        changeDateFilterSelectionCmd("relative", "GDC.time.date", -99, 0);
    };

    const resetDashboardDateFilter = () => {
        resetDateFilter();
    };

    const changeMultipleFilters = () => {
        // set the region filter and date filter using a single command
        changeFilterContextSelectionCmd([
            newNegativeAttributeFilter("customers.region", {
                uris: ["West"],
            }),
            newRelativeDateFilter(idRef("date", "dataSet"), "GDC.time.year", -10, 0),
        ]);
    };

    return (
        <div>
            <button onClick={changeProductFilterSelection}>Change Region selection</button>
            <button onClick={resetProductFilterSelection}>Reset Region filter</button>
            <button onClick={changeDashboardDateFilterSelection}>Change date filter selection</button>
            <button onClick={resetDashboardDateFilter}>Clear date filter selection</button>
            <button onClick={changeMultipleFilters}>Change multiple filters at once</button>
            AFTER WEBPACK UPGRADE and unique and expose and strict and version
        </div>
    );
};


export class Plugin extends DashboardPluginV1 {
    public readonly author = entryPoint.author;
    public readonly displayName = entryPoint.displayName;
    public readonly version = entryPoint.version;
    public readonly minEngineVersion = entryPoint.minEngineVersion;
    public readonly maxEngineVersion = entryPoint.maxEngineVersion;

    /**
     * Tags define by plugin to be replaced.
     */
     public tags: string[] = ["gauge"];

     /**
     * Defines gauge chart min/max values label visibility.
     */
    public showLabels: boolean = true;


    public onPluginLoaded(_ctx: DashboardContext, _parameters?: string): Promise<void> | void {

    }

    public register(
        _ctx: DashboardContext,
        customize: IDashboardCustomizer,
        handlers: IDashboardEventHandling,
    ): void {
        customize.customWidgets().addCustomWidget("myCustomWidget", MyCustomWidget);
        customize.customWidgets().addCustomWidget("barchart", BarChartExample);
        customize.customWidgets().addCustomWidget("test", TestWidget);
        customize.customWidgets().addCustomWidget("myWidgetWithFilters", MyCustomWidgetWithFilters);
        customize.customWidgets().addCustomWidget("changeFilters", changeFilterDashboard);
        customize.customWidgets().addCustomWidget("insightView", Insight);

        //customize.insightWidgets().withCustomProvider(provider_2);

        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(0,
                newDashboardSection(
                    "Custom widget: 1. ignore date and ignore region attribute filter. 2. uses date and apply all filters",
                    newDashboardItem(
                        newCustomWidget("myWidget1", "myWidgetWithFilters", {
                            // specify which date data set to used when applying the date filter to this widget
                            // if not specified, the date filter is ignored
                            //dateDataSet: idRef("DATE3"),
                            // specify which attribute filters to ignore for this widget
                            // if empty or not specified, all attribute filters are used
                            ignoreDashboardFilters: [
                                {
                                     type: "attributeFilterReference",
                                     displayForm: attributeDisplayFormRef(Region), //idRef("qa__customers.REGION"),
                                },
                            ],
                        }),
                        {
                            xl: {gridWidth: 6,gridHeight: 12,},
                        },
                    ),
                    newDashboardItem(
                        newCustomWidget("myWidget2", "myWidgetWithFilters", {
                            dateDataSet: idRef("date", "dataSet"), //DateDatasets.Date.ref, //idRef("DATE3", "dataSet"),
                            ignoreDashboardFilters: [
                                {
                                    type: "attributeFilterReference",
                                    displayForm: idRef("label.owner.id"),//sale rep (owner display form)
                                },
                                {
                                    type: "attributeFilterReference",
                                    displayForm: idRef("label.account.id.name"), //account (default display form)
                                },
                            ],
                        }),
                        {
                            xl: {gridWidth: 6,gridHeight: 12,},
                        },
                    ),
                    newDashboardItem(
                        newCustomWidget("myWidget3", "changeFilters"),
                        {
                            xl: {gridWidth: 12,gridHeight: 3,},
                        },
                    ),
                ),

            );
        });

        customize.layout().customizeFluidLayout((_layout, customizer) => {
            customizer.addSection(1, {
                items: [
                    {
                        size: { xl: { gridWidth: 8, gridHeight: 30 } },
                        type: "IDashboardLayoutItem",
                        widget: {
                            // this custom type must match the type used in the addCustomWidget call
                            customType: "barchart",
                            identifier: "foo_3",
                            ref: idRef("foo_3"),
                            type: "customWidget",
                            uri: "foo_3/chart",
                        },
                    },
                    {
                        size: { xl: { gridWidth: 4 } },
                        type: "IDashboardLayoutItem",
                        widget: {
                            // this custom type must match the type used in the addCustomWidget call
                            customType: "test",
                            identifier: "foo_3",
                            ref: idRef("foo_3"),
                            type: "customWidget",
                            uri: "foo_3/chart",
                        },
                    },
                    {
                        size: { xl: { gridWidth: 4 } },
                        type: "IDashboardLayoutItem",
                        widget: {
                            // this custom type must match the type used in the addCustomWidget call
                            customType: "insightView",
                            identifier: "foo_3",
                            ref: idRef("foo_3"),
                            type: "customWidget",
                            uri: "foo_3/chart",
                        },
                    },
                ],
                type: "IDashboardLayoutSection",
                header: {
                    title: "Hi from plugin",
                    description: "This section is created by old way",
                },
            });
        });

        handlers.addEventHandler("GDC.DASH/EVT.INITIALIZED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### Dashboard initialized", evt);
        });
        handlers.addCustomEventHandler({
            eval: (e) => e.type === "CUSTOM/EVT/MY_EVENT",
            handler: (e: MyCustomEvent) => {
                // eslint-disable-next-line no-console
                console.log("Custom event received", e.payload?.greeting);
            },
        });

        handlers.addEventHandler("GDC.DASH/EVT.FILTER_CONTEXT.DATE_FILTER.SELECTION_CHANGED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### date filter changed: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.FILTER_CONTEXT.ATTRIBUTE_FILTER.SELECTION_CHANGED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### attribute filter changed: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.FILTER_CONTEXT.CHANGED", (evt) => {
            // eslint-disable-next-line no-console
            console.log("### filter context changed: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.DEINITIALIZED", (evt) => {
            console.log("### De-initialized dasboard event: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.SAVED", (evt) => {
            console.log("### save event change: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.COPY_SAVED", (evt) => {
            console.log("### copy save event change: ", evt);
        });

        handlers.addEventHandler("GDC.DASH/EVT.SHARING.CHANGED", (evt) => {
            console.log("### Sharing permission change: ", evt);
        });
    }


    public onPluginUnload(_ctx: DashboardContext): Promise<void> | void {
        /*
         * This will be called when user navigates away from the dashboard enhanced by the plugin. At this point,
         * your code may do additional teardown and cleanup.
         *
         * Note: it is safe to delete this stub if your plugin does not need to do anything extra during unload.
         */
    }
}