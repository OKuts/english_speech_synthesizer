import {Link} from "react-router-dom";
import cn from './styles/Navigation.module.css'

export const Navigation = () => {
  return (
    <div className={cn.navbar}>
      <Link to='/round' children='Round'/>
      <Link to='/all' children='All'/>
    </div>
  );
};
