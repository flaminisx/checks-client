import React, {Component} from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


class HomePage extends Component{
  constructor(props){
    super(props);
  }

  formatDate(str){
    return new Date(str).toLocaleString("en", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  formatWarranty(purchased, warranty){
    const num = this.countWarranty(purchased, warranty);
    if(num > 0) return 'overdue';
    const date = new Date(-num);
    const y = date.getFullYear() - 1970 > 0 ? `${date.getFullYear() - 1970} years` : '';
    const m = date.getMonth() > 0 ? `${date.getMonth()} month` : '';
    const d = date.getDate();
    return `${y} ${m} ${d} days left`;
  }
  countWarranty(purchased, warranty){
    return +Date.now() - (+new Date(purchased) + (+new Date(warranty * 1000)));
  }

  render(){
    const { products } = this.props;
    return(
      <div className="home">
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
                 { products.map(product => {
                   return (
                     <TableRow key={product.id}>
                       <TableCell>
                         {product.title}
                       </TableCell>
                       <TableCell>{this.formatDate(product.purchased_at)}</TableCell>
                       <TableCell numeric>{ this.formatWarranty(product.purchased_at, product.warranty_time) }</TableCell>
                     </TableRow>
                   );
                 })}
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
}))(HomePage);

// <List component="nav">
//   { products.map((product) => <ListItem><ListItemText>{ product.title }</ListItemText></ListItem>) }
// </List>
