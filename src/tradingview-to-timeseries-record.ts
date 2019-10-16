/**
 * tradingview-to-timeseries-record
 * Convert a TradingView record to Timeseries Record
 */

import S from 'sanctuary'
import TimeseriesRecord from 'timeseries-record'
import { Maybe } from 'purify-ts/Maybe'


export interface TradingviewRecord {
    time: string;
    open: string;
    high: string;
    low: string;
    close: string;
}


/**
 * Convert a Tradingview record to Timeseries Record.
 *
 * @remarks
 * Tradingview records can be obtained through their export-to-csv function
 * https://www.tradingview.com/blog/en/export-chart-data-in-csv-14395/
 *
 * In case of parsing error, -1 will be used in lieu of throwing an
 * error.
 *
 * @param data Time-series data in TradingviewRecord format
 * @returns Data encoded in Timeseries Record format
 */
export function tradingviewToTimeseriesRecord(
    data: TradingviewRecord
): TimeseriesRecord {
    return {
        Time: Maybe.fromPredicate(S.complement (Number.isNaN), Number.parseInt(data.time, 10)).map(n => n * 1000).orDefault(-1),
        Open: Maybe.fromPredicate(S.complement (Number.isNaN), Number.parseFloat(data.open)).orDefault(-1),
        High: Maybe.fromPredicate(S.complement (Number.isNaN), Number.parseFloat(data.high)).orDefault(-1),
        Low: Maybe.fromPredicate(S.complement (Number.isNaN), Number.parseFloat(data.low)).orDefault(-1),
        Close: Maybe.fromPredicate(S.complement (Number.isNaN), Number.parseFloat(data.close)).orDefault(-1),
        Volume: 0
    }
}
