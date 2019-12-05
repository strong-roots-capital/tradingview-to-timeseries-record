import test from 'ava'
import TimeseriesRecord from 'timeseries-record'

/**
 * Library under test
 */

import {
    tradingviewToTimeseriesRecord,
    TradingviewRecord
} from '../src/tradingview-to-timeseries-record'

test('should convert tradingview record to timeseries record', t => {
    const time = 1543276800
    const open = 75
    const high = 100
    const low = 50
    const close = 69
    const volume = 234234

    const tv: TradingviewRecord = {
        time: time.toString(),
        open: open.toString(),
        high: high.toString(),
        low: low.toString(),
        close: close.toString(),
        volume: volume.toString()
    }
    const ts: TimeseriesRecord = {
        Time: time * 1000,
        Open: open,
        High: high,
        Low: low,
        Close: close,
        Volume: volume
    }
    t.deepEqual(
        ts,
        tradingviewToTimeseriesRecord(tv)
    )
})
