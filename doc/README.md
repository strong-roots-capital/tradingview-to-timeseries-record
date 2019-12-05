
tradingview-to-timeseries-record [![Build status](https://travis-ci.org/strong-roots-capital/tradingview-to-timeseries-record.svg?branch=master)](https://travis-ci.org/strong-roots-capital/tradingview-to-timeseries-record) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/tradingview-to-timeseries-record.svg)](https://npmjs.org/package/@strong-roots-capital/tradingview-to-timeseries-record) [![codecov](https://codecov.io/gh/strong-roots-capital/tradingview-to-timeseries-record/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/tradingview-to-timeseries-record)
===============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Convert a TradingView record to Timeseries Record

Install
-------

```shell
npm install @strong-roots-capital/tradingview-to-timeseries-record
```

Use
---

```typescript
import {
    tradingviewToTimeseriesRecord,
    TradingviewRecord
} from '@strong-roots-capital/tradingview-to-timeseries-record'

const timeseriesRecord = tradingviewToTimeseriesRecord(tvRecord)
```

## Index

### Interfaces

* [TradingviewRecord](interfaces/tradingviewrecord.md)

### Functions

* [tradingviewToTimeseriesRecord](#tradingviewtotimeseriesrecord)

---

## Functions

<a id="tradingviewtotimeseriesrecord"></a>

###  tradingviewToTimeseriesRecord

▸ **tradingviewToTimeseriesRecord**(data: *[TradingviewRecord](interfaces/tradingviewrecord.md)*): `TimeseriesRecord`

*Defined in [tradingview-to-timeseries-record.ts:34](https://github.com/strong-roots-capital/tradingview-to-timeseries-record/blob/f2b8193/src/tradingview-to-timeseries-record.ts#L34)*

Convert a Tradingview record to Timeseries Record.

*__remarks__*: Tradingview records can be obtained through their export-to-csv function [https://www.tradingview.com/blog/en/export-chart-data-in-csv-14395/](https://www.tradingview.com/blog/en/export-chart-data-in-csv-14395/)

In case of parsing error, -1 will be used in lieu of throwing an error.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | [TradingviewRecord](interfaces/tradingviewrecord.md) |  Time-series data in TradingviewRecord format |

**Returns:** `TimeseriesRecord`
Data encoded in Timeseries Record format

___

