import React, {useEffect} from 'react';
import * as NewsActions from "../../store/News/actions";
import {connect} from "react-redux";

import moment from 'moment';
import {ContentNews} from './styles'

import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 900,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const Index = ({loadingNews, news}) => {
    moment.locale('pt-br')
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);


    useEffect(() => {
        if (news.totalResults <= 0)
            loadingNews();
    }, [])
    return (
        <ContentNews>
            <GridList cellHeight={300} className={classes.gridList}>
                {news?.articles.map((it, idx) => (
                    <GridListTile key={idx}>
                        <img src={it.urlToImage} alt={it.title}/>
                        <a href={it.url} target='_blank'>
                            <GridListTileBar
                                title={it.title}
                                subtitle={<span>Por: {it.author}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${it.author}`} className={classes.icon}>
                                        <InfoIcon/>
                                    </IconButton>
                                }
                            />
                        </a>
                    </GridListTile>
                ))}
            </GridList>
        </ContentNews>
    )

}

const mapStateToProps = (state) => {
    return {
        loading: state.news.loading,
        success: state.news.success,
        message: state.news.message,
        news: state.news,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingNews: () => {
            dispatch(NewsActions.loadingNews());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);