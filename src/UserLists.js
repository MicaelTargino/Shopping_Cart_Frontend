import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component {
    state = { lists: null, loading: false }
    async componentDidMount() {
        const config = {
            headers: {
                "content-type": "application/json"
            }
        }
        config.headers['Authorization'] = 'Token 168acd782a6ef611d06eb155a040e5b0226f3119';
        var url = 'http://127.0.0.1:8000/lists/';

        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render() {
        return (
            <>
            <ListComponent name={'Minha Lista 1'} />
            <ListComponent name={'Minha Lista 2'} />
            </>
        )
    }
}