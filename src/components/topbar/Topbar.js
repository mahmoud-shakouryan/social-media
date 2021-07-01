import classes from "./topbar.module.css";
//import {Search, Person, Chat, Notificatins} from '@material-ui/icons';
const Topbar = () => {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarContainer__left}>
          <span className={classes.topbarContainer__left__logo}>lamasocial</span>
      </div>
      <div className={classes.topbarContainer__center}>
          <div className={classes.topbarContainer__center__searchbar}>
              {/* <Search/> */}
              <input className={classes.searchInput} type='text' placeholder='search for friends , videos , ...' />
          </div>
      </div>
      <div className={classes.topbarContainer__right}>
          <div className={classes.topbarContainer__right__links}>
              <span  className={classes.topbarContainer__right__links__link}>homepage</span>
              <span className={classes.topbarContainer__right__links__link}>timeline</span>
          </div>
          <div className={classes.topbarContainer__right__icons}>
            <div className={classes.topbarContainer__right__icons__icon}>
                {/* <Person/> */}
                <span className={classes.topbarContainer__right__icons__icon__badge}>1</span>
            </div>
            <div className={classes.topbarContainer__right__icons__icon}>
                {/* <Chat/> */}
                <span className={classes.topbarContainer__right__icons__icon__badge}>2</span>
            </div>
            <div className={classes.topbarContainer__right__icons__icon}>
                {/* <Notifications/> */}
                <span className={classes.topbarContainer__right__icons__icon__badge}>3</span>
            </div>
          </div>
          <img src='/assets/duck.png' alt='profile photo' className={classes.topbarContainer__right__image}/>
      </div>
    </div>
  );
};

export default Topbar;
