import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProductForm from '../forms/ProductForm';
import { createProduct as createProductAction } from '../../actions/productActions';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state={ formOpen: false };
  }

  formatDate(str){
    return new Date(str).toLocaleString("en", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  formatWarranty(time){
    if(time > 0) return 'overdue';
    const date = new Date(-time);
    const y = date.getFullYear() - 1970 > 0 ? `${date.getFullYear() - 1970} years` : '';
    const m = date.getMonth() > 0 ? `${date.getMonth()} month` : '';
    const d = date.getDate();
    return `${y} ${m} ${d} days left`;
  }
  countWarranty(purchased, warranty){
    return +Date.now() - (+new Date(purchased) + (+new Date(warranty * 1000)));
  }

  productRow(product){
    const warranty = this.countWarranty(product.purchased_at, product.warranty_time);
    let cls = "products__row";
    if(warranty > 0) cls = `${cls} products__row_late`;
    else if(warranty > -2592000) cls = `${cls} products__row_late`;
    else cls = `${cls} products__row_ok`;
    return (
      <TableRow key={ product.id } className={cls}>
        <TableCell>{ product.title }</TableCell>
        <TableCell>{ this.formatDate(product.purchased_at) }</TableCell>
        <TableCell>{ this.formatWarranty(warranty) }</TableCell>
      </TableRow>
    );
  }

  submit(data){
    this.props.createProduct(data);
    this.closeDialog();
  }

  closeDialog(){
    this.setState({ formOpen: false });
  }
  openDialog(){
    this.setState({ formOpen: true });
  }

  render(){
    const { products } = this.props;
    return(
      <div className="home">
        <div className="home__btnwrapper">
          <Button
            variant="raised"
            color="primary"
            onClick={this.openDialog.bind(this)}
            className="home__button"
            style={{margin: '30px auto auto'}}>
              Add new
          </Button>
          <ProductForm
            open={this.state.formOpen}
            onSubmit={this.submit.bind(this)}
            close={this.closeDialog.bind(this)}/>
        </div>
        <Grid container spacing={16} justify="center">
          <Grid item md={6}>
            <Paper className="home__wrapper" elevation={4} xs={12} lg={8} xl={6}>
              <Table>
               <TableHead>
                 <TableRow>
                   <TableCell>Product</TableCell>
                   <TableCell>Buy date</TableCell>
                   <TableCell>Warranty left</TableCell>
                 </TableRow>
               </TableHead>
               <TableBody>
                 { products.map(product => this.productRow(product)) }
               </TableBody>
             </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(({products}) => ({
  products
}), {
  createProduct: createProductAction
})(HomePage);
