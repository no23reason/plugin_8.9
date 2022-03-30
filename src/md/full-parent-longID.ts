/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-02-28T07:49:19.826Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: demo:campaign_channels.campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("demo:campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: demo:campaign_channels.category
 */
export const Category: IAttribute = newAttribute("demo:campaign_channels.category");
/**
 * Attribute Title: Type
 * Attribute ID: demo:campaign_channels.type
 */
export const Type: IAttribute = newAttribute("demo:campaign_channels.type");
/**
 * Attribute Title: Campaign id
 * Attribute ID: demo:campaigns.campaign_id
 */
export const CampaignId: IAttribute = newAttribute("demo:campaigns.campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: demo:campaigns.campaign_name
 */
export const CampaignName: IAttribute = newAttribute("demo:campaigns.campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: demo:customers.customer_id
 */
export const CustomerId: IAttribute = newAttribute("demo:customers.customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: demo:customers.customer_name
 */
export const CustomerName: IAttribute = newAttribute("demo:customers.customer_name");
/**
 * Attribute Title: Region
 * Attribute ID: demo:customers.region
 */
export const Region: IAttribute = newAttribute("demo:customers.region");
/**
 * Attribute Title: State
 * Attribute ID: demo:customers.state
 */
export const State = {
  /**
   * Display Form Title: Location
   * Display Form ID: demo:customers.geo__state__location
   */
  Location: newAttribute("demo:customers.geo__state__location")
  /**
   * Display Form Title: State
   * Display Form ID: demo:customers.state
   */,
  Default: newAttribute("demo:customers.state"),
};
/**
 * Attribute Title: Order id
 * Attribute ID: demo:order_lines.order_id
 */
export const OrderId: IAttribute = newAttribute("demo:order_lines.order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: demo:order_lines.order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("demo:order_lines.order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: demo:order_lines.order_status
 */
export const OrderStatus: IAttribute = newAttribute("demo:order_lines.order_status");
/**
 * Attribute Title: Category
 * Attribute ID: demo:products.category
 */
export const Category_1: IAttribute = newAttribute("demo:products.category");
/**
 * Attribute Title: Product id
 * Attribute ID: demo:products.product_id
 */
export const ProductId: IAttribute = newAttribute("demo:products.product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: demo:products.product_name
 */
export const ProductName: IAttribute = newAttribute("demo:products.product_name");
/**
 * Metric Title: Order Amount
 * Metric ID: demo:order_amount
 * Metric Type: MAQL Metric
 */
export const OrderAmount: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:order_amount", "measure"));
/**
 * Metric Title: FP Week
 * Metric ID: demo:24c0b4d2-3c7d-4a23-bd61-35abdfcb1886
 * Metric Type: MAQL Metric
 */
export const FPWeek: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:24c0b4d2-3c7d-4a23-bd61-35abdfcb1886", "measure")
);
/**
 * Metric Title: WEST
 * Metric ID: demo:11471746-c397-433c-9178-774f41c70760
 * Metric Type: MAQL Metric
 */
export const WEST: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:11471746-c397-433c-9178-774f41c70760", "measure")
);
/**
 * Metric Title: orderId
 * Metric ID: demo:orderid
 * Metric Type: MAQL Metric
 */
export const OrderId_1: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:orderid", "measure"));
/**
 * Metric Title: # of Orders
 * Metric ID: demo:amount_of_orders
 * Metric Type: MAQL Metric
 */
export const NrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:amount_of_orders", "measure"));
/**
 * Metric Title: Between number
 * Metric ID: demo:8943ee3d-cab1-45ec-800e-9b3798579034u
 * Metric Type: MAQL Metric
 */
export const BetweenNumber: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:8943ee3d-cab1-45ec-800e-9b3798579034u", "measure")
);
/**
 * Metric Title: BETWEEN
 * Metric ID: demo:e21395d3-6f36-4a1e-95d7-ca1b073e86e4
 * Metric Type: MAQL Metric
 */
export const BETWEEN: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:e21395d3-6f36-4a1e-95d7-ca1b073e86e4", "measure")
);
/**
 * Metric Title: FP Year
 * Metric ID: demo:970c5f26-4c60-42fd-85cd-bfb7f8f0dd0f
 * Metric Type: MAQL Metric
 */
export const FPYear: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:970c5f26-4c60-42fd-85cd-bfb7f8f0dd0f", "measure")
);
/**
 * Metric Title: FP Quarter
 * Metric ID: demo:45725747-0ef7-414f-99fd-885fc0eebba9
 * Metric Type: MAQL Metric
 */
export const FPQuarter: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:45725747-0ef7-414f-99fd-885fc0eebba9", "measure")
);
/**
 * Metric Title: Hello Word
 * Metric ID: demo:hello_word
 * Metric Type: MAQL Metric
 */
export const HelloWord: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:hello_word", "measure"));
/**
 * Metric Title: Copy of Between number2
 * Metric ID: demo:8943ee3d-cab1-45ec-800e-9b3798579034u2
 * Metric Type: MAQL Metric
 */
export const CopyOfBetweenNumber2: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:8943ee3d-cab1-45ec-800e-9b3798579034u2", "measure")
);
/**
 * Metric Title: Copy of # of Orders
 * Metric ID: demo:amount_of_orders1
 * Metric Type: MAQL Metric
 */
export const CopyOfNrOfOrders: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:amount_of_orders1", "measure"));
/**
 * Metric Title: Year >=2021
 * Metric ID: demo:9a10887a-f113-40c6-9372-87a40d8ba392
 * Metric Type: MAQL Metric
 */
export const Year2021: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:9a10887a-f113-40c6-9372-87a40d8ba392", "measure")
);
/**
 * Metric Title: FP Month
 * Metric ID: demo:c7db1139-a7ab-4e80-83bf-91657f28ac69
 * Metric Type: MAQL Metric
 */
export const FPMonth: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:c7db1139-a7ab-4e80-83bf-91657f28ac69", "measure")
);
/**
 * Metric Title: myd_metric
 * Metric ID: demo:myd_metric
 * Metric Type: MAQL Metric
 */
export const MydMetric: IMeasure<IMeasureDefinition> = newMeasure(idRef("demo:myd_metric", "measure"));
/**
 * Metric Title: Sum Price without Unknown
 * Metric ID: demo:sum_price_without_unknownl
 * Metric Type: MAQL Metric
 */
export const SumPriceWithoutUnknown: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("demo:sum_price_without_unknownl", "measure")
);
/**
 * Fact Title: Budget
 * Fact ID: demo:campaign_channels.budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: demo:campaign_channels.budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("demo:campaign_channels.budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: demo:campaign_channels.spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: demo:campaign_channels.spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("demo:campaign_channels.spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: demo:order_lines.price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: demo:order_lines.price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("demo:order_lines.price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: demo:order_lines.quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: demo:order_lines.quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("demo:order_lines.quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Date
 * Attribute ID: demo:date.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDate: IAttribute = newAttribute("demo:date.day");
/**
 * Attribute Title: Date - Day of Month
 * Attribute ID: demo:date.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfMonth: IAttribute = newAttribute("demo:date.dayOfMonth");
/**
 * Attribute Title: Date - Day of Week
 * Attribute ID: demo:date.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfWeek: IAttribute = newAttribute("demo:date.dayOfWeek");
/**
 * Attribute Title: Date - Day of Year
 * Attribute ID: demo:date.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateDayOfYear: IAttribute = newAttribute("demo:date.dayOfYear");
/**
 * Attribute Title: Date - Hour
 * Attribute ID: demo:date.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHour: IAttribute = newAttribute("demo:date.hour");
/**
 * Attribute Title: Date - Hour of Day
 * Attribute ID: demo:date.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateHourOfDay: IAttribute = newAttribute("demo:date.hourOfDay");
/**
 * Attribute Title: Date - Minute
 * Attribute ID: demo:date.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinute: IAttribute = newAttribute("demo:date.minute");
/**
 * Attribute Title: Date - Minute of Hour
 * Attribute ID: demo:date.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMinuteOfHour: IAttribute = newAttribute("demo:date.minuteOfHour");
/**
 * Attribute Title: Date - Month/Year
 * Attribute ID: demo:date.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthYear: IAttribute = newAttribute("demo:date.month");
/**
 * Attribute Title: Date - Month of Year
 * Attribute ID: demo:date.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateMonthOfYear: IAttribute = newAttribute("demo:date.monthOfYear");
/**
 * Attribute Title: Date - Quarter/Year
 * Attribute ID: demo:date.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterYear: IAttribute = newAttribute("demo:date.quarter");
/**
 * Attribute Title: Date - Quarter of Year
 * Attribute ID: demo:date.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateQuarterOfYear: IAttribute = newAttribute("demo:date.quarterOfYear");
/**
 * Attribute Title: Date - Week/Year
 * Attribute ID: demo:date.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekYear: IAttribute = newAttribute("demo:date.week");
/**
 * Attribute Title: Date - Week of Year
 * Attribute ID: demo:date.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateWeekOfYear: IAttribute = newAttribute("demo:date.weekOfYear");
/**
 * Attribute Title: Date - Year
 * Attribute ID: demo:date.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DateYear: IAttribute = newAttribute("demo:date.year");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("demo:date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: demo:date.day
     */,
    DateDate: {
      ref: idRef("demo:date.day", "attribute"),
      identifier: "demo:date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: demo:date.day
       */,
      Default: newAttribute("demo:date.day"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: demo:date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("demo:date.dayOfMonth", "attribute"),
      identifier: "demo:date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: demo:date.dayOfMonth
       */,
      Default: newAttribute("demo:date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: demo:date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("demo:date.dayOfWeek", "attribute"),
      identifier: "demo:date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: demo:date.dayOfWeek
       */,
      Default: newAttribute("demo:date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: demo:date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("demo:date.dayOfYear", "attribute"),
      identifier: "demo:date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: demo:date.dayOfYear
       */,
      Default: newAttribute("demo:date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: demo:date.hour
     */,
    DateHour: {
      ref: idRef("demo:date.hour", "attribute"),
      identifier: "demo:date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: demo:date.hour
       */,
      Default: newAttribute("demo:date.hour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: demo:date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("demo:date.hourOfDay", "attribute"),
      identifier: "demo:date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: demo:date.hourOfDay
       */,
      Default: newAttribute("demo:date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: demo:date.minute
     */,
    DateMinute: {
      ref: idRef("demo:date.minute", "attribute"),
      identifier: "demo:date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: demo:date.minute
       */,
      Default: newAttribute("demo:date.minute"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: demo:date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("demo:date.minuteOfHour", "attribute"),
      identifier: "demo:date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: demo:date.minuteOfHour
       */,
      Default: newAttribute("demo:date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: demo:date.month
     */,
    DateMonthYear: {
      ref: idRef("demo:date.month", "attribute"),
      identifier: "demo:date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: demo:date.month
       */,
      Default: newAttribute("demo:date.month"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: demo:date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("demo:date.monthOfYear", "attribute"),
      identifier: "demo:date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: demo:date.monthOfYear
       */,
      Default: newAttribute("demo:date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: demo:date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("demo:date.quarter", "attribute"),
      identifier: "demo:date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: demo:date.quarter
       */,
      Default: newAttribute("demo:date.quarter"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: demo:date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("demo:date.quarterOfYear", "attribute"),
      identifier: "demo:date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: demo:date.quarterOfYear
       */,
      Default: newAttribute("demo:date.quarterOfYear"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: demo:date.week
     */,
    DateWeekYear: {
      ref: idRef("demo:date.week", "attribute"),
      identifier: "demo:date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: demo:date.week
       */,
      Default: newAttribute("demo:date.week"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: demo:date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("demo:date.weekOfYear", "attribute"),
      identifier: "demo:date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: demo:date.weekOfYear
       */,
      Default: newAttribute("demo:date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: demo:date.year
     */,
    DateYear: {
      ref: idRef("demo:date.year", "attribute"),
      identifier: "demo:date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: demo:date.year
       */,
      Default: newAttribute("demo:date.year"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Customer Name
   * Insight ID: demo:46f25ab4-4770-4401-bbc2-ed07f36a9557
   */
  CustomerName_1: "demo:46f25ab4-4770-4401-bbc2-ed07f36a9557"
  /**
   * Insight Title: Table 1
   * Insight ID: demo:1597f2cc-7ea4-4539-a9d0-de80f77f2694
   */,
  Table1: "demo:1597f2cc-7ea4-4539-a9d0-de80f77f2694"
  /**
   * Insight Title: DF: parent
   * Insight ID: demo:e5746a3a-3317-4b92-b722-a3603cd08909
   */,
  DFParent: "demo:e5746a3a-3317-4b92-b722-a3603cd08909"
  /**
   * Insight Title: Date-All Time
   * Insight ID: demo:b6886464-5c32-4033-8a54-34180ca41383
   */,
  DateAllTime: "demo:b6886464-5c32-4033-8a54-34180ca41383"
  /**
   * Insight Title: Insight 1
   * Insight ID: demo:d63290fc-ad1e-4b7d-8aab-cd9283c97034
   */,
  Insight1: "demo:d63290fc-ad1e-4b7d-8aab-cd9283c97034"
  /**
   * Insight Title: Date filter
   * Insight ID: demo:ff7fdfb0-1ced-4482-be68-43711daa613c
   */,
  DateFilter: "demo:ff7fdfb0-1ced-4482-be68-43711daa613c"
  /**
   * Insight Title: Insight Filter 1
   * Insight ID: demo:194052fe-4157-4157-8f30-2093858f3063
   */,
  InsightFilter1: "demo:194052fe-4157-4157-8f30-2093858f3063"
  /**
   * Insight Title: Insight Filter 2 - Attribute
   * Insight ID: demo:16e9b898-2204-49cb-a034-fd9ae31c27e1
   */,
  InsightFilter2Attribute: "demo:16e9b898-2204-49cb-a034-fd9ae31c27e1"
  /**
   * Insight Title: DF: multiple attribute
   * Insight ID: demo:fd1885a1-5a99-4e09-9f9b-e5a0a66fe477
   */,
  DFMultipleAttribute: "demo:fd1885a1-5a99-4e09-9f9b-e5a0a66fe477"
  /**
   * Insight Title: fef
   * Insight ID: demo:77b181b3-10d4-483b-83ec-15fd73f6ca10
   */,
  Fef: "demo:77b181b3-10d4-483b-83ec-15fd73f6ca10"
  /**
   * Insight Title: AD1
   * Insight ID: demo:7033d062-120a-4c27-9c4b-d761c3dc7f5d
   */,
  AD1: "demo:7033d062-120a-4c27-9c4b-d761c3dc7f5d"
  /**
   * Insight Title: drill into url from hour
   * Insight ID: demo:dda79304-7f5c-495e-b56b-06b468c970fd
   */,
  DrillIntoUrlFromHour: "demo:dda79304-7f5c-495e-b56b-06b468c970fd"
  /**
   * Insight Title: not apply
   * Insight ID: demo:fa948323-ff71-4db4-ae5b-6bee27723e0f
   */,
  NotApply: "demo:fa948323-ff71-4db4-ae5b-6bee27723e0f"
  /**
   * Insight Title: apply date
   * Insight ID: demo:67783e92-85f2-49f9-88c6-8fe7b3755473
   */,
  ApplyDate: "demo:67783e92-85f2-49f9-88c6-8fe7b3755473"
  /**
   * Insight Title: normal insight
   * Insight ID: demo:4b155b4c-c523-4a4e-ba20-340ba5508763
   */,
  NormalInsight: "demo:4b155b4c-c523-4a4e-ba20-340ba5508763"
  /**
   * Insight Title: date didn't available
   * Insight ID: demo:11afcd93-30eb-45fe-8d8e-d532e9b21266
   */,
  DateDidnTAvailable: "demo:11afcd93-30eb-45fe-8d8e-d532e9b21266"
  /**
   * Insight Title: save from explore
   * Insight ID: demo:8cae00fd-283a-4962-becd-bfba228fc41b
   */,
  SaveFromExplore: "demo:8cae00fd-283a-4962-becd-bfba228fc41b"
  /**
   * Insight Title: save from explore 2
   * Insight ID: demo:877aabd3-409d-4d4a-8a4f-86ea7140ad71
   */,
  SaveFromExplore2: "demo:877aabd3-409d-4d4a-8a4f-86ea7140ad71"
  /**
   * Insight Title: save H
   * Insight ID: demo:621f3bde-111a-47ba-abd2-56223efc5f3c
   */,
  SaveH: "demo:621f3bde-111a-47ba-abd2-56223efc5f3c"
  /**
   * Insight Title: FILTER INSIGHT
   * Insight ID: demo:adf681d9-68f8-4917-a283-467e37c42b80
   */,
  FILTERINSIGHT: "demo:adf681d9-68f8-4917-a283-467e37c42b80"
  /**
   * Insight Title: PP
   * Insight ID: demo:c81bf614-6714-404d-9d4b-4167585e9aad
   */,
  PP: "demo:c81bf614-6714-404d-9d4b-4167585e9aad"
  /**
   * Insight Title: Working with FOR Previous
   * Insight ID: demo:a4a9ef53-2632-4eb2-bccd-4228b4433cb8
   */,
  WorkingWithFORPrevious: "demo:a4a9ef53-2632-4eb2-bccd-4228b4433cb8"
  /**
   * Insight Title: URL: d2u from attribute
   * Insight ID: demo:33335ee0-58ff-4e18-b6e5-ab9afd39af87
   */,
  URLD2uFromAttribute: "demo:33335ee0-58ff-4e18-b6e5-ab9afd39af87"
  /**
   * Insight Title: _table
   * Insight ID: demo:d5b7c7fd-de41-48ec-826f-a55a26338556
   */,
  Table: "demo:d5b7c7fd-de41-48ec-826f-a55a26338556"
  /**
   * Insight Title: _column
   * Insight ID: demo:9d512ff5-e650-4531-af40-7ff60be9f735
   */,
  Column: "demo:9d512ff5-e650-4531-af40-7ff60be9f735"
  /**
   * Insight Title: _bar
   * Insight ID: demo:1f0a197a-27e6-4a54-a2a3-3f7958f90e14
   */,
  Bar: "demo:1f0a197a-27e6-4a54-a2a3-3f7958f90e14"
  /**
   * Insight Title: _line
   * Insight ID: demo:5c5ecb02-28d5-4fba-9d4d-427df18850ca
   */,
  Line: "demo:5c5ecb02-28d5-4fba-9d4d-427df18850ca"
  /**
   * Insight Title: _area
   * Insight ID: demo:f0e9e837-0810-4854-bd05-1aa96c0aa60a
   */,
  Area: "demo:f0e9e837-0810-4854-bd05-1aa96c0aa60a"
  /**
   * Insight Title: _combo
   * Insight ID: demo:95b3e571-ec57-4783-b28a-57666c5c98b9
   */,
  Combo: "demo:95b3e571-ec57-4783-b28a-57666c5c98b9"
  /**
   * Insight Title: _headline
   * Insight ID: demo:5d72fe00-59c5-4eb2-886d-e9e20ed3a694
   */,
  Headline: "demo:5d72fe00-59c5-4eb2-886d-e9e20ed3a694"
  /**
   * Insight Title: _scatter
   * Insight ID: demo:5fa60686-2ede-4653-ba3b-c23f5c10d23d
   */,
  Scatter: "demo:5fa60686-2ede-4653-ba3b-c23f5c10d23d"
  /**
   * Insight Title: _bubble
   * Insight ID: demo:bb85535d-0b91-433d-ac0c-a16b9fd592f9
   */,
  Bubble: "demo:bb85535d-0b91-433d-ac0c-a16b9fd592f9"
  /**
   * Insight Title: _pie
   * Insight ID: demo:5d5541d5-9a51-4cb0-b685-e3df855cd027
   */,
  Pie: "demo:5d5541d5-9a51-4cb0-b685-e3df855cd027"
  /**
   * Insight Title: _donut
   * Insight ID: demo:782bd52e-5489-4671-91ee-7eac30b33b26
   */,
  Donut: "demo:782bd52e-5489-4671-91ee-7eac30b33b26"
  /**
   * Insight Title: _treemap
   * Insight ID: demo:87d95db2-a1cd-41a5-bfce-1784bc5e5e9e
   */,
  Treemap: "demo:87d95db2-a1cd-41a5-bfce-1784bc5e5e9e"
  /**
   * Insight Title: _heatmap
   * Insight ID: demo:b6131485-1fd9-4ef2-bf9b-f1707d857671
   */,
  Heatmap: "demo:b6131485-1fd9-4ef2-bf9b-f1707d857671"
  /**
   * Insight Title: _bullet
   * Insight ID: demo:f4f28536-669a-4387-8e63-1aeabfeca8c2
   */,
  Bullet: "demo:f4f28536-669a-4387-8e63-1aeabfeca8c2"
  /**
   * Insight Title: DF: multiple displayform
   * Insight ID: demo:c6345de2-c15b-4f60-9c84-78a0ecdd6fcb
   */,
  DFMultipleDisplayform: "demo:c6345de2-c15b-4f60-9c84-78a0ecdd6fcb"
  /**
   * Insight Title: ad parent
   * Insight ID: demo:fc117abf-273a-4614-bf4d-8b08e968caeb
   */,
  AdParent: "demo:fc117abf-273a-4614-bf4d-8b08e968caeb"
  /**
   * Insight Title: order
   * Insight ID: demo:74541e4b-6efd-4c41-8a3b-2343e09dea98
   */,
  Order: "demo:74541e4b-6efd-4c41-8a3b-2343e09dea98"
  /**
   * Insight Title: no filter
   * Insight ID: demo:dedf824a-b5f5-448e-b4b1-c0ea20fbb9ba
   */,
  NoFilter: "demo:dedf824a-b5f5-448e-b4b1-c0ea20fbb9ba"
  /**
   * Insight Title: no filter 2
   * Insight ID: demo:183f4544-fac5-424d-92c4-2151646e107c
   */,
  NoFilter2: "demo:183f4544-fac5-424d-92c4-2151646e107c"
  /**
   * Insight Title: filter
   * Insight ID: demo:bb092429-e6d7-4609-9da1-7be55e06f981
   */,
  Filter: "demo:bb092429-e6d7-4609-9da1-7be55e06f981"
  /**
   * Insight Title: pop
   * Insight ID: demo:976ed976-d6bc-46b4-8f90-0f4751a2249f
   */,
  Pop: "demo:976ed976-d6bc-46b4-8f90-0f4751a2249f"
  /**
   * Insight Title: pop 2, no attribute filter global
   * Insight ID: demo:2cc3c6b4-91ce-4f03-a00e-d4eea0c0e967
   */,
  Pop2NoAttributeFilterGlobal: "demo:2cc3c6b4-91ce-4f03-a00e-d4eea0c0e967"
  /**
   * Insight Title: filter 2
   * Insight ID: demo:9395be42-dbe6-4dad-9368-72e8bb15fe62
   */,
  Filter2: "demo:9395be42-dbe6-4dad-9368-72e8bb15fe62"
  /**
   * Insight Title: min-width column
   * Insight ID: demo:9bedcc34-8d5e-49ed-a327-473f53af5d80
   */,
  MinWidthColumn: "demo:9bedcc34-8d5e-49ed-a327-473f53af5d80"
  /**
   * Insight Title: d2u: column
   * Insight ID: demo:ed7e7e5e-3bb8-4d6c-83b7-a7bbd2dc08c4
   */,
  D2uColumn: "demo:ed7e7e5e-3bb8-4d6c-83b7-a7bbd2dc08c4"
  /**
   * Insight Title: d2u: headline
   * Insight ID: demo:019acd54-27c0-4eb7-ab33-88c7a211e027
   */,
  D2uHeadline: "demo:019acd54-27c0-4eb7-ab33-88c7a211e027"
  /**
   * Insight Title: d2u: bubble
   * Insight ID: demo:db59520f-e143-454e-a9e6-7793fa0383c4
   */,
  D2uBubble: "demo:db59520f-e143-454e-a9e6-7793fa0383c4"
  /**
   * Insight Title: d2u: heatmap
   * Insight ID: demo:d4c697bf-d80e-4ef3-826e-aa83e6543bd4
   */,
  D2uHeatmap: "demo:d4c697bf-d80e-4ef3-826e-aa83e6543bd4"
  /**
   * Insight Title: d2u: bullet
   * Insight ID: demo:db70abd5-06eb-4838-b576-a4c88aa8332d
   */,
  D2uBullet: "demo:db70abd5-06eb-4838-b576-a4c88aa8332d"
  /**
   * Insight Title: check today
   * Insight ID: demo:89af5df4-9585-42b4-989b-72ca1d88af64
   */,
  CheckToday: "demo:89af5df4-9585-42b4-989b-72ca1d88af64"
  /**
   * Insight Title: filter insight
   * Insight ID: demo:8c6fab5a-bad2-4fd0-b111-abba66aa4b63
   */,
  FilterInsight: "demo:8c6fab5a-bad2-4fd0-b111-abba66aa4b63"
  /**
   * Insight Title: order
   * Insight ID: demo:c4043dc2-a0c4-4b01-973a-44e2027f2c35
   */,
  Order_1: "demo:c4043dc2-a0c4-4b01-973a-44e2027f2c35"
  /**
   * Insight Title: report placed on KD
   * Insight ID: demo:863339b7-7b0e-47eb-a0ff-36b50dfbc03a
   */,
  ReportPlacedOnKD: "demo:863339b7-7b0e-47eb-a0ff-36b50dfbc03a"
  /**
   * Insight Title: TY
   * Insight ID: demo:ea0f8dee-4fbd-4f3f-8ce3-e2fc45e2517d
   */,
  TY: "demo:ea0f8dee-4fbd-4f3f-8ce3-e2fc45e2517d"
  /**
   * Insight Title: AD
   * Insight ID: demo:5be86e82-cef0-45b1-a038-bfc093d82dae
   */,
  AD: "demo:5be86e82-cef0-45b1-a038-bfc093d82dae"
  /**
   * Insight Title: AD
   * Insight ID: demo:f74ff2df-3fbe-450e-ae85-6333d44d178c
   */,
  AD_1: "demo:f74ff2df-3fbe-450e-ae85-6333d44d178c"
  /**
   * Insight Title: 8/12 created from parent
   * Insight ID: demo:b7e049ed-5311-4f73-a4a6-c56ca2d40e90
   */,
  _812CreatedFromParent: "demo:b7e049ed-5311-4f73-a4a6-c56ca2d40e90"
  /**
   * Insight Title: tyfyio
   * Insight ID: demo:7a0b492c-f73f-4698-afba-c1fc8ad51142
   */,
  Tyfyio: "demo:7a0b492c-f73f-4698-afba-c1fc8ad51142"
  /**
   * Insight Title: parent - region filter test
   * Insight ID: demo:89e6b92a-deca-4398-b181-a59b78eab106
   */,
  ParentRegionFilterTest: "demo:89e6b92a-deca-4398-b181-a59b78eab106"
  /**
   * Insight Title: count customer id
   * Insight ID: demo:403196a8-30c8-487b-9564-1be54c3b5bb5
   */,
  CountCustomerId: "demo:403196a8-30c8-487b-9564-1be54c3b5bb5"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:4bf04b80-fb4d-4613-aea8-295056384991
   */,
  CategoryInsight: "demo:4bf04b80-fb4d-4613-aea8-295056384991"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:449eb4a6-9ba4-4ba1-a43d-4aa3420f0461
   */,
  CategoryInsight_1: "demo:449eb4a6-9ba4-4ba1-a43d-4aa3420f0461"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:6d88f354-5b86-4e80-837c-60ad801c0e30
   */,
  CategoryInsight_2: "demo:6d88f354-5b86-4e80-837c-60ad801c0e30"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:1617b09d-2794-4f03-b69d-001be08575f6
   */,
  CategoryInsight_3: "demo:1617b09d-2794-4f03-b69d-001be08575f6"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:5518bd10-c3dd-4845-9512-642fcd0260ec
   */,
  CategoryInsight_4: "demo:5518bd10-c3dd-4845-9512-642fcd0260ec"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:780d86ae-cda2-4a7c-8e5c-b0ab806c0771
   */,
  CategoryInsight_5: "demo:780d86ae-cda2-4a7c-8e5c-b0ab806c0771"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:b00e4b72-830b-4711-b5c0-50491d686a61
   */,
  CategoryInsight_6: "demo:b00e4b72-830b-4711-b5c0-50491d686a61"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:36d8c51a-3cba-4519-8ae9-45588647822d
   */,
  CategoryInsight_7: "demo:36d8c51a-3cba-4519-8ae9-45588647822d"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:5439d78a-1591-470f-b6b0-ba76db6fd5ca
   */,
  CategoryInsight_8: "demo:5439d78a-1591-470f-b6b0-ba76db6fd5ca"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:9caf2e2d-0381-4a51-8d7f-f0a14d12fd66
   */,
  CategoryInsight_9: "demo:9caf2e2d-0381-4a51-8d7f-f0a14d12fd66"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:1663a6c9-5eb3-43fd-bad7-0d79fde08731
   */,
  CategoryInsight_10: "demo:1663a6c9-5eb3-43fd-bad7-0d79fde08731"
  /**
   * Insight Title: Category Insight
   * Insight ID: demo:466f480e-6a0a-47c6-a85d-fbb385ca66fe
   */,
  CategoryInsight_11: "demo:466f480e-6a0a-47c6-a85d-fbb385ca66fe"
  /**
   * Insight Title: 1
   * Insight ID: demo:25fe96c7-980b-4a29-8d08-1f3a34dd0125
   */,
  _1: "demo:25fe96c7-980b-4a29-8d08-1f3a34dd0125"
  /**
   * Insight Title: AD100
   * Insight ID: demo:842c50c3-ae4d-479a-b808-0228bb508737
   */,
  AD100: "demo:842c50c3-ae4d-479a-b808-0228bb508737"
  /**
   * Insight Title: test
   * Insight ID: demo:03f0da7d-dde1-43c7-85d7-901191fcaac8
   */,
  Test: "demo:03f0da7d-dde1-43c7-85d7-901191fcaac8",
};
export const Dashboards = {
  /**
   * Dashboard Title: Drill To URL
   * Dashboard ID: demo:d10f797c-073b-450f-8215-b75a2bfeb778
   */
  DrillToURL: "demo:d10f797c-073b-450f-8215-b75a2bfeb778"
  /**
   * Dashboard Title: myd-selection label
   * Dashboard ID: demo:ad6dc18e-9604-440b-a73e-6baf6e4c8fa8
   */,
  MydSelectionLabel: "demo:ad6dc18e-9604-440b-a73e-6baf6e4c8fa8"
  /**
   * Dashboard Title: KD Date Filter
   * Dashboard ID: demo:8383e97a-68ca-4a0b-8f35-189722081afe
   */,
  KDDateFilter: "demo:8383e97a-68ca-4a0b-8f35-189722081afe"
  /**
   * Dashboard Title: KD filter 2
   * Dashboard ID: demo:8b848cfe-4834-4a67-b4a3-43d83f256a6f
   */,
  KDFilter2: "demo:8b848cfe-4834-4a67-b4a3-43d83f256a6f"
  /**
   * Dashboard Title: DFA
   * Dashboard ID: demo:d9059b5b-2cee-4642-9c7d-6002fc8122d6
   */,
  DFA: "demo:d9059b5b-2cee-4642-9c7d-6002fc8122d6"
  /**
   * Dashboard Title: of children
   * Dashboard ID: demo:12100563-6bae-46b7-b445-36e98e1755cf
   */,
  OfChildren: "demo:12100563-6bae-46b7-b445-36e98e1755cf"
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: demo:46c43d45-a752-46d2-83d2-d28b6eb30c30
   */,
  Untitled: "demo:46c43d45-a752-46d2-83d2-d28b6eb30c30"
  /**
   * Dashboard Title: Copy of myd-selection label
   * Dashboard ID: demo:b79339d7-9b8c-4723-8d17-7dd8fe00e9ad
   */,
  CopyOfMydSelectionLabel: "demo:b79339d7-9b8c-4723-8d17-7dd8fe00e9ad"
  /**
   * Dashboard Title: drill to insight - test drill to url
   * Dashboard ID: demo:eb078d8f-426b-4a7f-84d0-fa76324917fd
   */,
  DrillToInsightTestDrillToUrl: "demo:eb078d8f-426b-4a7f-84d0-fa76324917fd"
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: demo:07c582ff-e7d8-418a-bf47-992cd9791b6c
   */,
  Untitled_1: "demo:07c582ff-e7d8-418a-bf47-992cd9791b6c"
  /**
   * Dashboard Title: Copy of Untitled
   * Dashboard ID: demo:fc792774-020a-4596-ae44-8e696655f298
   */,
  CopyOfUntitled: "demo:fc792774-020a-4596-ae44-8e696655f298"
  /**
   * Dashboard Title: FILTER KD
   * Dashboard ID: demo:623258b8-854a-4255-85d7-fc002b7d2db1
   */,
  FILTERKD: "demo:623258b8-854a-4255-85d7-fc002b7d2db1"
  /**
   * Dashboard Title: parent thg
   * Dashboard ID: demo:4b490bc1-bfa3-49ed-9de9-9f2cbc89afea
   */,
  ParentThg: "demo:4b490bc1-bfa3-49ed-9de9-9f2cbc89afea"
  /**
   * Dashboard Title: Copy thg
   * Dashboard ID: demo:f18514dc-ae48-4d12-9764-a5ba043229f5
   */,
  CopyThg: "demo:f18514dc-ae48-4d12-9764-a5ba043229f5"
  /**
   * Dashboard Title: ok thg
   * Dashboard ID: demo:158f42aa-d5ca-447a-8ce8-e33357f33ed2
   */,
  OkThg: "demo:158f42aa-d5ca-447a-8ce8-e33357f33ed2"
  /**
   * Dashboard Title: full thg
   * Dashboard ID: demo:b46afce0-3bc5-4392-97a7-e1a49e7d22ef
   */,
  FullThg: "demo:b46afce0-3bc5-4392-97a7-e1a49e7d22ef"
  /**
   * Dashboard Title: Filter negative=true
   * Dashboard ID: demo:111bdf88-8861-4947-81cf-ff99d2a04177
   */,
  FilterNegativeTrue: "demo:111bdf88-8861-4947-81cf-ff99d2a04177"
  /**
   * Dashboard Title: Filter negative=false
   * Dashboard ID: demo:87f65387-7dde-4e8e-9430-04c981606f06
   */,
  FilterNegativeFalse: "demo:87f65387-7dde-4e8e-9430-04c981606f06"
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: demo:55ca5acf-5ea4-462b-88f4-8e39c771befa
   */,
  Untitled_2: "demo:55ca5acf-5ea4-462b-88f4-8e39c771befa"
  /**
   * Dashboard Title: parent thg hihi
   * Dashboard ID: demo:2ed34afa-40c1-44af-a8ef-76563a5246b6
   */,
  ParentThgHihi: "demo:2ed34afa-40c1-44af-a8ef-76563a5246b6"
  /**
   * Dashboard Title: ula
   * Dashboard ID: demo:19697f56-06aa-4e7d-b182-3d32ef40e7dd
   */,
  Ula: "demo:19697f56-06aa-4e7d-b182-3d32ef40e7dd"
  /**
   * Dashboard Title: h
   * Dashboard ID: demo:638bf0e2-3db1-41c6-b359-6862fb1dd41b
   */,
  H: "demo:638bf0e2-3db1-41c6-b359-6862fb1dd41b"
  /**
   * Dashboard Title: pv
   * Dashboard ID: demo:1bc31e15-06b7-4f6e-92d9-0b593b02661f
   */,
  Pv: "demo:1bc31e15-06b7-4f6e-92d9-0b593b02661f"
  /**
   * Dashboard Title: Filter negative=false TEST
   * Dashboard ID: demo:57a8a186-2be2-4e28-a549-b710c4e82221
   */,
  FilterNegativeFalseTEST: "demo:57a8a186-2be2-4e28-a549-b710c4e82221"
  /**
   * Dashboard Title: Copy of drill to insight - test drill to url
   * Dashboard ID: demo:b3670da1-6030-467d-9bb5-85c800a4b3ac
   */,
  CopyOfDrillToInsightTestDrillToUrl: "demo:b3670da1-6030-467d-9bb5-85c800a4b3ac"
  /**
   * Dashboard Title: Copy of drill to insight - test drill to url
   * Dashboard ID: demo:e89410e0-d3b3-4fb2-8568-b276cf4aba8e
   */,
  CopyOfDrillToInsightTestDrillToUrl_1: "demo:e89410e0-d3b3-4fb2-8568-b276cf4aba8e"
  /**
   * Dashboard Title: Copy of Copy of drill to insight - test drill to url
   * Dashboard ID: demo:ce00f7a1-6a6c-44f4-bc92-a5ab2819307d
   */,
  CopyOfCopyOfDrillToInsightTestDrillToUrl: "demo:ce00f7a1-6a6c-44f4-bc92-a5ab2819307d"
  /**
   * Dashboard Title: Copy of Copy of Copy of drill to insight - test drill to url
   * Dashboard ID: demo:d5ba37f2-00c8-449d-bacf-838d583ac48e
   */,
  CopyOfCopyOfCopyOfDrillToInsightTestDrillToUrl: "demo:d5ba37f2-00c8-449d-bacf-838d583ac48e"
  /**
   * Dashboard Title: TLE-test
   * Dashboard ID: demo:37bac563-7e91-4a68-906d-9311baeb6397
   */,
  TLETest: "demo:37bac563-7e91-4a68-906d-9311baeb6397"
  /**
   * Dashboard Title: TLE-test2
   * Dashboard ID: demo:0c5e2ffb-c18b-4b79-bef2-e28d292e5d66
   */,
  TLETest2: "demo:0c5e2ffb-c18b-4b79-bef2-e28d292e5d66"
  /**
   * Dashboard Title: report place on KD
   * Dashboard ID: demo:6fe9275e-4b17-4b39-860a-6abe64181697
   */,
  ReportPlaceOnKD: "demo:6fe9275e-4b17-4b39-860a-6abe64181697"
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: demo:a9fc2c0a-ab16-468c-b43e-5ad5ea71d93d
   */,
  Untitled_3: "demo:a9fc2c0a-ab16-468c-b43e-5ad5ea71d93d"
  /**
   * Dashboard Title: tu
   * Dashboard ID: demo:66d0ca84-aeaf-4a30-8196-463a0890ebf1
   */,
  Tu: "demo:66d0ca84-aeaf-4a30-8196-463a0890ebf1"
  /**
   * Dashboard Title: i
   * Dashboard ID: demo:84a78784-db23-4226-af15-6c603f47731b
   */,
  I: "demo:84a78784-db23-4226-af15-6c603f47731b"
  /**
   * Dashboard Title: oio
   * Dashboard ID: demo:72432d3d-d153-467d-ae9b-815e3ffc5bec
   */,
  Oio: "demo:72432d3d-d153-467d-ae9b-815e3ffc5bec"
  /**
   * Dashboard Title: new parent dashboard (myd)
   * Dashboard ID: demo:509d4e29-52b2-4f0a-a805-d53996941781
   */,
  NewParentDashboardMyd: "demo:509d4e29-52b2-4f0a-a805-d53996941781"
  /**
   * Dashboard Title: parent dashboard (myd)
   * Dashboard ID: demo:3ee07ec2-e865-400a-94a5-df402cdc5f50
   */,
  ParentDashboardMyd: "demo:3ee07ec2-e865-400a-94a5-df402cdc5f50"
  /**
   * Dashboard Title: new parent dashboard
   * Dashboard ID: demo:505bdc65-a9ab-432c-856e-ea1b3b6e147b
   */,
  NewParentDashboard: "demo:505bdc65-a9ab-432c-856e-ea1b3b6e147b"
  /**
   * Dashboard Title: Copy of myd-selection label
   * Dashboard ID: demo:2d7861e0-61a5-4bdf-ac2d-62183aca55b1
   */,
  CopyOfMydSelectionLabel_1: "demo:2d7861e0-61a5-4bdf-ac2d-62183aca55b1"
  /**
   * Dashboard Title: tnt-225
   * Dashboard ID: demo:a9778ed8-5140-415c-8955-099d8c4fb957
   */,
  Tnt225: "demo:a9778ed8-5140-415c-8955-099d8c4fb957"
  /**
   * Dashboard Title: parent dashboard 1/12
   * Dashboard ID: demo:bb808bf4-e2fb-4324-8348-952ce7b1deac
   */,
  ParentDashboard112: "demo:bb808bf4-e2fb-4324-8348-952ce7b1deac"
  /**
   * Dashboard Title: plugin
   * Dashboard ID: demo:c439ecd4-3586-44f5-8849-268cffa56c7a
   */,
  Plugin: "demo:c439ecd4-3586-44f5-8849-268cffa56c7a"
  /**
   * Dashboard Title: new 7/12 - parent
   * Dashboard ID: demo:9629312d-7b94-4987-9341-bd44bca1f1f9
   */,
  New712Parent: "demo:9629312d-7b94-4987-9341-bd44bca1f1f9"
  /**
   * Dashboard Title: new 7/12 - target drill
   * Dashboard ID: demo:8b66d94c-dac5-4c0d-b06c-d543611c4a7a
   */,
  New712TargetDrill: "demo:8b66d94c-dac5-4c0d-b06c-d543611c4a7a"
  /**
   * Dashboard Title: Untitled
   * Dashboard ID: demo:a6ef2f79-79aa-4fdb-8727-d78577c3c2cb
   */,
  Untitled_4: "demo:a6ef2f79-79aa-4fdb-8727-d78577c3c2cb"
  /**
   * Dashboard Title: DRILL FROM PARENT
   * Dashboard ID: demo:ec0bb83d-e5ef-402d-9b8b-066ee363b137
   */,
  DRILLFROMPARENT: "demo:ec0bb83d-e5ef-402d-9b8b-066ee363b137"
  /**
   * Dashboard Title: 8/12 created from parent
   * Dashboard ID: demo:e6c3980c-9c31-4739-87fe-6e9b3f3d5abc
   */,
  _812CreatedFromParent_1: "demo:e6c3980c-9c31-4739-87fe-6e9b3f3d5abc"
  /**
   * Dashboard Title: save
   * Dashboard ID: demo:5c5c251d-a195-420b-a129-d131c38f324d
   */,
  Save: "demo:5c5c251d-a195-420b-a129-d131c38f324d"
  /**
   * Dashboard Title: parent 18/12
   * Dashboard ID: demo:0965e64b-9904-4c01-afd0-3497a356624b
   */,
  Parent1812: "demo:0965e64b-9904-4c01-afd0-3497a356624b"
  /**
   * Dashboard Title: plugin 8.8.0
   * Dashboard ID: demo:c2299579-b674-4c73-b8a5-80441c16067c
   */,
  Plugin880: "demo:c2299579-b674-4c73-b8a5-80441c16067c"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:d45971ee-53cf-4f36-997c-e8116fc94a75
   */,
  OrdersOverview: "demo:d45971ee-53cf-4f36-997c-e8116fc94a75"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:5a768bc2-2cab-4030-b472-6367cabe8649
   */,
  OrdersOverview_1: "demo:5a768bc2-2cab-4030-b472-6367cabe8649"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:a4845865-72a7-4f32-b0f8-777423721ea6
   */,
  OrdersOverview_2: "demo:a4845865-72a7-4f32-b0f8-777423721ea6"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:5afc6331-dc22-4d51-983d-3177868ef0c3
   */,
  OrdersOverview_3: "demo:5afc6331-dc22-4d51-983d-3177868ef0c3"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:772749dd-dbc8-4843-b0d9-ba3481cf4663
   */,
  OrdersOverview_4: "demo:772749dd-dbc8-4843-b0d9-ba3481cf4663"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:e5155138-573e-44fc-944a-701c9b3ac0d9
   */,
  OrdersOverview_5: "demo:e5155138-573e-44fc-944a-701c9b3ac0d9"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:225c61ff-0a05-4e30-bc5c-da4dbb5415c5
   */,
  OrdersOverview_6: "demo:225c61ff-0a05-4e30-bc5c-da4dbb5415c5"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:944d2d9e-8f9e-4e0c-b43a-8c6c8de422ed
   */,
  OrdersOverview_7: "demo:944d2d9e-8f9e-4e0c-b43a-8c6c8de422ed"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:ae83f706-c427-48ec-ac6a-59eb0f0ff219
   */,
  OrdersOverview_8: "demo:ae83f706-c427-48ec-ac6a-59eb0f0ff219"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:bf980091-89bf-4d59-97ac-dce8f4e71568
   */,
  OrdersOverview_9: "demo:bf980091-89bf-4d59-97ac-dce8f4e71568"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:0753d48d-bb28-4829-bd6d-ec875643c209
   */,
  OrdersOverview_10: "demo:0753d48d-bb28-4829-bd6d-ec875643c209"
  /**
   * Dashboard Title: Orders overview
   * Dashboard ID: demo:74cfb328-24c3-4cc7-8908-a7fbe4a6572b
   */,
  OrdersOverview_11: "demo:74cfb328-24c3-4cc7-8908-a7fbe4a6572b"
  /**
   * Dashboard Title: plugin 8.9 alpha
   * Dashboard ID: demo:448213e8-9c43-4b31-9781-4e65b152939d
   */,
  Plugin89Alpha: "demo:448213e8-9c43-4b31-9781-4e65b152939d"
  /**
   * Dashboard Title: KD
   * Dashboard ID: demo:93594b11-1a72-471e-b002-f93878f66899
   */,
  KD: "demo:93594b11-1a72-471e-b002-f93878f66899",
};
