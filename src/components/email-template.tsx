import * as React from "react";

interface EmailTemplateProps {
    firstName:string,
    Address:string,
    Email:string,
    Project:string,
    Phone:string;

}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, Address, Email, Project, Phone
}) => (
    <div>
        <h1> {firstName} , has requested a quote</h1>
        <ul>
            <li>Address : { Address }</li>
            <li>Phone : { Phone }</li>
            <li>Email : { Email }</li>
            <li>Project : { Project }</li>
        </ul>
    </div>
)