// src/mocks/handlers.js
import { graphql } from 'msw'
import {postResponse, postsResponse} from "./responses/postsResponse";

export const handlers = [

    graphql.query('Posts', (req, res, ctx) => {
        return res(
            ctx.data(postsResponse),
        )
    }),
    graphql.query('Post', (req, res, ctx) => {
        const { id } = req.variables
        return res(
            ctx.data(postResponse(id)),
        )
    }),
]

