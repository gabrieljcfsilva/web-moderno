import React from 'react'

import { childrenWithProps } from '../utils/utils'

export default props => (
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>

        <ul>
            {
                childrenWithProps(props)


                // React.Children.map(props.children, child => {
                //     return React.cloneElement(child, {
                //         ...props, ...child.props
                //     })
                // }) //Trabalha com varios elementos

                // React.cloneElement(props.children, {
                //     ...props, ...props.children.props
                // }) trabalha com apenas um elemento
            }

        </ul>
    </div>
)