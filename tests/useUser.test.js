import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
// import TestComponent from './TestComponent'
import { useUser } from '../custom_hooks/useUser'

const server = setupServer(
    rest.get("https://7wxk9bbssnyb.usemoralis.com:2053/server/users", (req, res, ctx) => {
        return res(
            ctx.status(200),
            // mocking json data even though it doesn't match actual res bc I'm only
            // testing my hook not the package
            ctx.json({
                user: {
                    className: "_User",
                    id: 123456,
                    userWalletAddress: 'someuserwalletaddress',
                    userBalance: 123,
                    userName: 'someuser'
                }
            })
        )
    })
)

beforeAll(() => server.listen());
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

describe("tests useUser hook", () => {
    test('user should be defined when hook is called', async () => {
        const { user, userWalletAddress, userBalance, userName } = await useUser()
        expect(user).toBeNull();
        
        waitFor() // MSW
    })
})
