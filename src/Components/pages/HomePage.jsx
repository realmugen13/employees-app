import React from 'react'
import { employees } from '../../emloyees';

export default function HomePage() {

    function countDepartment(dep) {
        let counter = 0 

        employees.map((emp) => {
            if (emp.department === dep){
                counter ++
            }
            return counter
        })
        
    }


function countFemaleEmployees(dep) {
        let counter = 0 
    
        if (dep === 'all') {
           employees.map((emp) => {
            if (emp.gender === 'Female') {
                counter++
            }
            return counter
        })
     
    } else {
        employees.map((emp) => {
            if (emp.department === dep) {
            if (emp.gender === 'Female') {
                counter++
            }
        }
        return counter
     })
    
}
 return counter

}


function countMaleEmployees(dep) {
        let counter = 0 
    
        if (dep === 'all') {
           employees.map((emp) => {
            if (emp.gender === 'Male') {
                counter++
            }
            return counter
        })
     
    } else {
        employees.map((emp) => {
            if (emp.department === dep) {
            if (emp.gender === 'Male') {
                counter++
            }
        }
        return counter
     })
    
}
 return counter

}

  return (
    <div >
<div className="mainCards">

<div className="Cards">
                    <div className="texts">
                        <p>All Workers</p>
                        <h4>{employees.length}</h4>
                        <div className="gender">
                            <h5>Female:</h5>
                            <h5>{countFemaleEmployees('all')}</h5>
                            <h5>Male:</h5>
                            <h5>{countMaleEmployees('all')}</h5>
                            </div>
                    </div>
                </div>



                <div className="Cards">
                    <div className="texts">
                        <p>It Workers</p>
                        <h4>
                            {countDepartment('IT')}
                        </h4>
                        <div className="gender">
                            <h5>Female:</h5>
                            <h5>{countFemaleEmployees('IT')}</h5>
                            <h5>Male:</h5>
                            <h5>{countMaleEmployees('IT')}</h5>
                            </div>
                    </div>
                </div>
                <div className="Cards">
                        <div className="texts">
                            <p>Accounting Workers</p>
                            <h4>{countDepartment('Accounting')}</h4>
                            <div className="gender">
                            <h5>Female:</h5>
                            <h5>{countFemaleEmployees('Accounting')}</h5>
                            <h5>Male:</h5>
                            <h5>{countMaleEmployees('Accounting')}</h5>
                            </div>
                        </div>
                </div>
                <div className="Cards">
                        <div className="texts">
                            <p>Marketing Workers</p>
                            <h4>{countDepartment('Marketing')}</h4>
                            <div className="gender">
                            <h5>Female:</h5>
                            <h5>{countFemaleEmployees('Marketing')}</h5>
                            <h5>Male:</h5>
                            <h5>{countMaleEmployees('Marketing')}</h5>
                            </div>

                        </div>
                </div>

            </div>
    </div>
);
};
