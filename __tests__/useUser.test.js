import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useUser } from '../custom_hooks/useUser'
import { Moralis } from 'moralis'
import { useMoralis } from 'react-moralis'
import Navbar from '../components/common/Navbar'

test('user should be defined when hook is called', () => {
    const { getByText } = render(<Navbar />)

    expect(getByText("NFTea").toBeInTheDocument())
})
