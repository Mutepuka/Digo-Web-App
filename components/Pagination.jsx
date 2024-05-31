"use client";

import React from 'react';

const Pagination = () => {
  return (
    <nav className="pagination-a">
        <ul className="pagination justify-content-end">
            <li className="page-item disabled">
                <a href="#" className="page-link" tabIndex="-1">
                    <span className="bi bi-chevron-left"></span>
                </a>
            </li>

            <li className="page-item active">
                <a href="#" className="page-link">1</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">2</a>
            </li>
            <li className="page-item">
                <a href="#" className="page-link">3</a>
            </li>

            <li className="page-item next">
                <a href="#" className="page-link">
                    <span className="bi bi-chevron-right"></span>
                </a>
            </li>
        </ul>

    </nav>
  )
}

export default Pagination