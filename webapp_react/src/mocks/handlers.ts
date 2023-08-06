// src/mocks/handlers.js
import { graphql } from 'msw'
import {postsResponse} from "./responses/postsResponse";

export const handlers = [

    graphql.query('Posts', (req, res, ctx) => {
        return res(
            ctx.data(postsResponse),
        )
    }),
]

