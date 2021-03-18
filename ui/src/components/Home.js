import React from 'react';
import './styles/home.css';
import { Redirect } from "react-router"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputS: 0,
            inputF: 1,
            fireRedirect: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    }
    handleSubmit(event) {
        // alert('Этажей: ' + this.state.inputF + ". Площадь: " + this.state.inputS);
        event.preventDefault();
        this.setState({ fireRedirect: true })
      }
    render() {
        const { fireRedirect } = this.state
        const { from } = this.props.location.state || '/'

        return (
            <form className="Calc" onSubmit={this.handleSubmit}>
                <div className="Square">
                    <label>
                        <span>Площадь m<sup>2</sup>:</span>
                        <input type='number' className="HomeInput" name='inputS' value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div className="floors">
                    <label>
                        <span>Этажи:</span>
                        <select name="inputF" className="HomeInput" value={this.state.value} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                </div>
                <input type="submit" className="submitButton" value="Отправить" />
            {fireRedirect && (
                <Redirect to={from || "build/" + this.state.inputS + "/" + this.state.inputF + "/"} />
            )}
            </form>
        );
    }
}

export default Home;
