import React from 'react'
import { Typography } from '@mui/material'

interface TitleAndSubHeaderProps {
    title: string
    subHeader: string
}

export default function TitleAndSubHeader(props: TitleAndSubHeaderProps) {
    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',
                marginBottom: '1rem'
            }
        }>
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="h6">{props.subHeader}</Typography>
        </div>
    )
}