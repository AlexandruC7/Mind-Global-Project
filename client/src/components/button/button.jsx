import React from "react";
import "./button.css";
import styled from "styled-components";

const ButtonComponent = styled.button `
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border-radius: 0.3rem;
    padding: 0 
    ${props => props.size === "sm" ? "1.4rem" : props.size === "md" ? "1.7rem" : props.size === "lg" ? "1.9rem" : "1.3rem"};
    height: ${props => props.size === "sm"? "45px" : props.size === "md" ? "47px" : props.size === "lg" ? "50px" : "39px"};
    font-weight: 500;
    border: 1px solid transparent;
    background-color: ${props => props.variant === "light" ? "#f8f9fa" : props.variant === "dark" ? "#212529" : props.variant === "primary" ? "#0d6efd" : props.variant === "secondary" ? "#6c757d" : props.variant === "success" ? "#198754" : props.variant === "info" ? "#0dcaf0" : props.variant === "warning" ? "#ffc107" : props.variant === "danger" ? "#dc3545" : "#f8f9fa"};
    color: ${props => props.variant === "light" ? "#f8f9fa" : props.variant === "dark" ? "#ffffff" : props.variant === "primary" ? "#ffffff" : props.variant === "secondary" ? "#ffffff" : props.variant === "success" ? "#ffffff" : props.variant === "info" ? "#ffffff" : props.variant === "warning" ? "#ffffff" : props.variant === "danger" ? "#ffffff" : "#f8f9fa"};

    `;



export function Button({type, variant, className, id, onClick, children, size}) {
    return ( <div className="btn">
      <ButtonComponent
        type={type ? type : "button"}
        variant={variant}
        className={className ? `btn-component ${className}` : "btn-component"}
        id={id}
        onClick={onClick}
        size={size}
      >
        {children}
      </ButtonComponent>
      </div>
    );
  }

  export default Button;