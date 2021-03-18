import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputS: 0,
            inputF: 1,
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
        alert('Этажей: ' + this.state.inputF + ". Площадь: " + this.state.inputS);
        event.preventDefault();
      }
    render() {
        return (
            <form className="Calc" onSubmit={this.handleSubmit}>
                <div className="Square">
                    <label>
                        Площадь m<sup>2</sup>:
                        <input type='number' name='inputS' value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div className="floors">
                    <label>
                        Этажи:
                        <select name="inputF" value={this.state.value} onChange={this.handleChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                </div>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default Home;
