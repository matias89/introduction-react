import React from "react";
import PropTypes from 'prop-types';
const Product = ({ id, userId, title, body, onChange }) => {
  const CardTitle = React.createElement('h5', {className:'card-title', key: `test_1_${id}`}, title);
  const CardText = React.createElement('p', {className:'card-text', key: `test_2_${id}` }, body);
  const Button = React.createElement('button', {className:'btn btn-primary',key: `test_3_${id}`}, 'go somewhere');
  const CardBody = React.createElement('div', {className: 'card-body', key: `test_5_${id}`},[CardTitle, CardText, Button]);
  const CardHeader = React.createElement('h5', {className:'card-header', key: `test_4_${id}`}, `ID : ${ id }`);
  const CardContainer = React.createElement('div', {className:''}, [CardHeader, CardBody]);
  return (
    <div className="card py-2">
      {CardContainer}
      <input
        type="text"
        className="form-control d-block w-75 m-auto"
        onChange={onChange}
      />
    </div>
  );
};

Product.defaultProps = {
  id:'',
  userId:'',
  title:'',
  body:'',
}
Product.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
}
export default Product;
