import React from "react";
import Card from "react-bootstrap/Card";

const Footer = () => {
    return (
        <Card>
            <Card.Header> Random Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Any fool can write code that a computer can understand. Good programmers write code that humans can understand. {''}
                    </p>
                    <footer className="blockquote-footer">
                        <cite title="Source Title">Martin Fowler</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default Footer;
