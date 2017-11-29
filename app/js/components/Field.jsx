import React, { Component } from 'react';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import config from '../../../config';

class Field extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: '',
            message: '',
            err: false
        }
    }

    handleChange = event => {
        this.setState({ value: event.target.value, err: false });
    }

    handleSubmit = e => {
        e.preventDefault();
        const name = this.state.value;
        if (name) {
            fetch(`${config.url}sites/${name}`, { method: 'POST' })
                .then(r => r.json())
                .then(response =>
                    this.setState({
                        message: response.message,
                        err: response.error,
                        value: ''
                    }))
                .then(() => { !this.state.err ? this.props.onGetSites() : null })
        } else {
            this.setState({ err: true, message: 'You need to fill this field' })
        }
    }

    render() {
        const { err, message, value } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <FormControl error={err}>
                    <InputLabel htmlFor="name-simple">Name</InputLabel>
                    <Input id="name-simple" value={value} onChange={this.handleChange} />
                    <FormHelperText>{err ? message : ''}</FormHelperText>
                </FormControl>
                <Button onClick={this.handleSubmit} color="primary">
                    add
                </Button>
            </form>
        );
    }
}

export default Field;