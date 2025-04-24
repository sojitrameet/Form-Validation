import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';

const initialvalues = {
  fname: '',
  lname:'',
  email: '',
  number:'',
  password: '',
  cpassword: '',
  course: '',
  city: ''
}
let validateSchema = Yup.object({
  fname: Yup.string().min(2).max(10,"At least 10 charater allowed.").required("Enter your First Name"),
  lname: Yup.string().min(2).max(10,"At least 10 charater allowed.").required("Enter your Last Name"),

  email: Yup.string().email().required("Enter your mail "),
  number:Yup.string().max(10).required("Enter Your Contact Number"),
  password: Yup.string().min(6).required("Enter your password"),
  cpassword: Yup.string().required().oneOf([Yup.ref("password"), null],"Password must match"),
  city: Yup.string().required("Choose one city."),
  course: Yup.string().required("Please select Course."),
});

function App() {

  const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormik({
    initialValues: initialvalues,
    validationSchema:validateSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  console.log(errors);

  return (
    <>
      <div className='container border'>

        <form className="row g-3" onSubmit={handleSubmit}>
        <h2 className="d-flex justify-content-center"> Student Detail</h2>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">First Name</label>
            <input type="name" className="form-control" name="fname" id="inputfullname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {(errors && touched.fname) && <span>{errors.fname}</span>}
          </div>


          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Last Name</label>
            <input type="text" className="form-control" name='lname' id="inputPassword4" 
                 value={values.lname}
                 onChange={handleChange}
                 onBlur={handleBlur}
            />
            {(errors && touched.lname) && <span>{errors.lname}</span>}

          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Enter Email</label>
            <input type="email" className="form-control" name='email' id="inputPassword4" 
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}/>
            {(errors && touched.email) && <span>{errors.email}</span>}

          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Contect no.</label>
            <input type="number" className="form-control" name='number' id="inputPassword4"
               value={values.number}
               onChange={handleChange}
               onBlur={handleBlur}
             />
            {(errors && touched.number) && <span>{errors.number}</span>}

          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="inputPassword4" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {(errors && touched.password) && <span>{errors.password}</span>}

          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Conform Password</label>
            <input type="password" className="form-control" name='cpassword' id="inputPassword4"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {(errors && touched.cpassword) && <span>{errors.cpassword}</span>}

          </div>


   



          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">City</label>
            <select id="inputState" className="form-select" name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option >Choose...</option>
              <option value='Surat'>Surat</option>
              <option value='Ahmedabad'>Ahmedabad</option>
              <option value='Navrsari'>Navrsari</option>        
            </select>
          </div>


          <div className="col-12">
                <h2>Select Course</h2>
            <div className="form-check">
              <input className="form-check-input" type="radio" id="gridCheck"name='course'  
              onChange={handleChange}
              onBlur={handleBlur} value="B.COM" />
              <label className="form-check-label" htmlFor="gridCheck"  >
                 B.com
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" id="gridCheck" name='course'
               value="BBA"
               onChange={handleChange}
               onBlur={handleBlur}
               />
              <label className="form-check-label" htmlFor="gridCheck" >
                BBA
              </label>
            </div>
            
            <div className="form-check">
              <input className="form-check-input" type="radio" id="gridCheck" name='course'  value ="BCA"
              onChange={handleChange}
              onBlur={handleBlur} />
              <label className="form-check-label" htmlFor="gridCheck" >
                  BCA
              </label>
            </div>
            
           

            
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>

      </div>
      

    </>
  )
}
export default App;
