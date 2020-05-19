import React, { Component } from 'react'
import { Grid, Row, Col, Table } from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
export class RegisterMerchant extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                 <Row>
                 <Col md={12}>
                 <Card
                title="Register Merchant"
                content={
                    <form>
                        <FormInputs
                         ncols={["col-md-4", "col-md-5", "col-md-3"]}
                         properties={[
                            {
                              label: "National Identification Number",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "NIN",
                            //   defaultValue: "23456",
                              disabled: false
                            },
                            {
                              label: "Name of beneficiary",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "Name ....",
                            //   defaultValue: "Kato"
                            },
                            {
                              label: "Mobile number of Beneficiary",
                              type: "text",
                              bsClass: "form-control",
                              placeholder: "MSISDN : e.g +256-700-000-000"
                            }
                          ]}
                        
                        />
                    
                        <FormInputs
                      ncols={["col-md-8"]}
                      properties={[
                        {
                          label: "Amount equivalence of the voucher",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "e.g  500,000 /=",
                        //   defaultValue:
                        //     "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />

<FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Planned date of food delivery",
                          type: "date",
                          bsClass: "form-control",
                        //   placeholder: "Date of Delivery",
                        //   defaultValue: "getDate()"
                        },
                        {
                          label: "District",
                          type: "select",
                          bsClass: "form-control",
                          placeholder: "e.g Wakiso",
                        //   defaultValue: "Andrew"
                        },
                        {
                          label: "Sub-county",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g kyadondo"
                        }
                      ]}
                    /> 


<FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Parish",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g  Makindye",
                        //   defaultValue: "Mike"
                        },
                        {
                          label: "Village",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g Kansanga",
                        //   defaultValue: "Andrew"
                        },
                        {
                          label: "Point of collection",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "e.g Bank of Baroda"
                        }
                      ]}
                    /> 
                    </form>
                }
                
                />
                 </Col>
                 </Row>
                 <Row>
                 <Button bsStyle="info" pullRight round fill type="submit">
                      Register Merchant
                    </Button>
                 </Row>
                </Grid>
                
            </div>
        )
    }
}

export default RegisterMerchant
