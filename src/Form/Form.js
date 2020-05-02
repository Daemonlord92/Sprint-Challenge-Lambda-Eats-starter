import React, { useState, useEffect} from 'react'
import axios from 'axios'
import * as yup from 'yup';

const Form = props => {

	const initialFormState = {
		name: "",
		crust: "",
		size: "",
		instructions: '',
	}

	const [post, setPost] = useState([])

	const [serverError, setServerError] = useState("")

	const [formState, setFormState] = useState(initialFormState)

	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	const [errors, setErrors] = useState(initialFormState)
  
  const formSchema = yup.object().shape({
  	name: yup.string().required("Name is a requirement!"),
		size: yup
				.string()
				.required("What size pizza do you want"),
		crust: yup.string(),
		pepperoni: yup.string(),
    cheese: yup.string(),
    sausage: yup.string(),
    pineapple: yup.string(),
    instructions: yup.string()
  })

  const validateChage = e => {
  	yup
  		.reach(formSchema, e.target.name)
  		.validate(e.target.value)
  		.then(valid => {
  			setErrors({ ...errors, [e.target.name]: ""})
  		})
  		.catch(err => {
  			console.log("Error Deku", err)
  			setErrors({ ...errors, [e.target.name]: err.errors })
  		})
  }

  useEffect(() => {
  	formSchema.isValid(formState).then(valid => {
  		setIsButtonDisabled(!valid)
  	})
  }, [formState])

  const formSubmit = e => {
  	e.preventDefault()

  	axios
  		.post("https://reqres.in/api/users", formState)
  		.then(response => {
  			setPost(response.data)

				setFormState(initialFormState)

				setServerError(null)
  		})
  		.catch(err => {
  			setServerError("Error Will Robertson", err)
  		})
  }

  const inputChange = e => {
  	e.persist()

  	const newFormData = {
  		...formState,
  		[e.target.name]:
  			e.target.type === "checkbox" ?
  			e.target.checked : e.target.value
  	}

  	validateChage(e)

  	setFormState(newFormData)
  }

	return (
	
			<form onSubmit={formSubmit} className="card">
				{serverError ? <p className="error">{serverError}</p> : null}
				<label htmlFor="name">
					Name
					<br />
					<input
						id="name"
						type="text"
						name="name"
						onChange={inputChange}
						value={formState.name}
						data-cy="name"
					/>
					{errors.name.length > 2 ? <p className="error">{errors.name}</p> : null}
				</label>
				<label htmlFor="size">
	        What size pizza do you want
	        <br />
	        <select id="size" name="size" onChange={inputChange}>
	          <option value="">--Please choose an size--</option>
	          <option value="10">10</option>
	          <option value="12">12</option>

	          <option value="14">14</option>
	          <option value="16">16</option>
	          <option value="18">18</option>
	        </select>
	        {errors.size.length > 0 ? (
	          <p className="error">{errors.size}</p>
	        ) : null}
	      </label>
	      <label htmlFor="crust">
	        What crust do you want
	        <br />
	        <select id="crust" name="crust" onChange={inputChange}>
	          <option value="">--Please choose a crust--</option>
	          <option value="Original Crust">Original Crust</option>
	          <option value="Thin Crust">Thin Crust</option>

	          <option value="Stuff Crust">Stuff Crust</option>
	        </select>
	        {errors.size.length > 0 ? (
	          <p className="error">{errors.crust}</p>
	        ) : null}
	      </label>
	      <label htmlFor="pizzaTopping"> Select desired toppings
          <input 
              id = "pepperoni"
              name="pepperoni"
              type="checkbox"
              value= {formState.pizzaTopping}
              onChange= {inputChange}
          /> Pepperoni <br />
          <input 
              id = "cheese"
              name="cheese"
              type="checkbox"
              value= {formState.pizzaTopping}
              onChange= {inputChange}
          /> Cheese <br />
          <input 
              id = "sausage"
              name="sausage"
              type="checkbox"
              value= {formState.pizzaTopping}
              onChange= {inputChange}
          /> Sausage <br />
          <input 
              id = "pineapple"
              name="pineapple"
              type="checkbox"
              value= {formState.pizzaTopping}
              onChange= {inputChange}
          /> Pineapple

	      </label>
	      <label htmlFor="instructions">
	          Any special requests?
	          <input 
	              name="instructions"
	              type="text"
	              value= {formState.instructions}
	              onChange= {inputChange}
	          />
	      </label>
	      <pre>{JSON.stringify(post, null, 2)}</pre>
	      <button disabled={isButtonDisabled} type="submit" className="btn btn-primary">
	        Submit
	      </button>
			</form>
		
		)
}

export default Form