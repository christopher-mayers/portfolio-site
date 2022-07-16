import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

 
class Contact extends Component {
    render() {
        return (
            <div>
                <Document file="./resume.pdf" >
                    <Page pageNumber={1} />
                </Document>
            </div>
        );
    }
}
 
export default Contact;