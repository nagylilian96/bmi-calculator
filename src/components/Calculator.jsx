import React from 'react'

export const Calculator=({bmi})=>{
    
    console.log("");
    
    return(
        <div className="row align-items-center justify-content-center mb-5">
            <div className="col-sm-6">
                <div className="inline-block text-center mt-3 mb-3">
                    <p className="bmi m-0">Az Ön testtömeg indexe: {bmi}</p>

                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-12">Osztályozás (Kg/m2)</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">Sovány</div>
                    <div className="col-sm-6"> - 20</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">Normál</div>
                    <div className="col-sm-6">20 - 25</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">Túlsúly</div>
                    <div className="col-sm-6">25 - 30</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">I. fokú elhízás</div>
                    <div className="col-sm-6">30 - 35</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">II.fokú elhízás</div>
                    <div className="col-sm-6">35 - 40</div>
                </div>
                <div className="row">
                    <div className="col-sm-6">III. fokú elhízás</div>
                    <div className="col-sm-6">40 - </div>
                </div>
            </div>
        </div>

    )
}