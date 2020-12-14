import React, { Component } from "react";
import Input from "../../Components/UI/Input/Input";
import Aux from "../../hoc/Aux";
import classes from "./ContactPage.module.css";
import Button from "../../Components/Button/Button";
import axios from "axios";
import Spinner from "../../Components/UI/Spinner/Spinner";

class ContactPage extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      lastName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Last Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        validation: {},
        valid: false,
        touched: false,
      },
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = { orderData: formData };
    axios
      .post("https://appliance-app2.firebaseio.com/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
        console.log(this.props);
      })
      .catch((err) => {
        this.setState({ loading: true }, console.log(err));
      });
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    console.log(updatedFormElement);
    this.setState({ orderForm: updatedOrderForm });
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.minLength && isValid;
    }
    return isValid;
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    return (
      <Aux>
        <div className={classes.Form}>
          <button onClick={this.props.closed}>X</button>
          <h4 style={{ display: "flex", justifyContent: "center" }}>
            Enter Your Contact Data
          </h4>
          <form onSubmit={this.orderHandler}>
            {formElementsArray.map((formElement) => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.value}
                invalid={!formElement.config.valid}
                shoudlValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) =>
                  this.inputChangedHandler(event, formElement.id)
                }
              />
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              {this.state.loading ? <Spinner /> : <Button>Confirm</Button>}
            </div>
          </form>
        </div>
      </Aux>
    );
  }
}

export default ContactPage;
