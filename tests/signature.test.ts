import { beforeAll, describe, expect, it, vi } from 'vitest'
import { HirezSignatureHelper } from '../src/hirez-signature-helper'

describe('HirezSignatureTs', () => {
    beforeAll(() => {
        vi.useFakeTimers().setSystemTime(new Date('2022-01-01T20:00:00'))
    })

    it('should throw when called with with an unknown method', () => {
        expect(() => {
            HirezSignatureHelper.createSignature({
                method: 'unknown-method' as any,
                devId: 'any-key',
                authKey: 'any-key'
            })
        }).toThrowError()
    })

    it('should throw when called with empty method', () => {
        expect(() => {
            HirezSignatureHelper.createSignature({
                method: '' as any,
                devId: 'any-id',
                authKey: 'any-key'
            })
        }).toThrowError()
    })

    it('should throw when called with empty key or id', () => {
        expect(() => {
            HirezSignatureHelper.createSignature({
                method: 'createsession' as any,
                devId: '',
                authKey: 'any-key'
            })
        }).toThrowError()

        expect(() => {
            HirezSignatureHelper.createSignature({
                method: 'createsession' as any,
                devId: 'any-id',
                authKey: ''
            })
        }).toThrowError()
    })

    it('should return a valid signature when called with correct params', () => {
        const createSignatureSpy = vi.spyOn(
            HirezSignatureHelper,
            'createSignature'
        )

        HirezSignatureHelper.createSignature(fakeParams())

        expect(createSignatureSpy).toHaveBeenCalledWith({
            method: 'createsession',
            devId: '1234',
            authKey: '1234'
        })

        expect(createSignatureSpy).toReturnWith({
            md5: 'a14b8369cfb968ca14d11271fb84129d',
            timestamp: '20220101200000'
        })
    })

    const fakeParams = (): any => ({
        method: 'createsession',
        devId: '1234',
        authKey: '1234'
    })
})
