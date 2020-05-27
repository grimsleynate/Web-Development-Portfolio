import React, {useState} from 'react';
import './CardDemo.css';
import {Card, CardMedia, Typography, Icon, Dialog, Divider, Button, AppBar, Toolbar, Slide, IconButton, makeStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {Carousel, CarouselSlide} from 'material-ui-carousel';

//this is the transition slide used when the dialog is displayed.  Currently we have the direction set to right.
// Other acceptable directions: down, left, right, up
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });

/*
PROPS LIST
    image: STRING the url of the image used in the card
    imageTitle: STRING the title for the image used in the card
    gradientColor1: STRING (yellow, blue, green, pink, purple) the first gradient color for the overlay and for the appBar in the Dialog Box
    gradientColor2: STRING (yellow, blue, green, pink, purple) the second gradient color for the overlay and for the appBar in the Dialog Box
    client: STRING the title for the card, displayed under the image
    subtitle: STRING the subtitle for the card, displayed under the title
    description: STRING a short, one sentence description of the project
    url: STRING the link to the project's website
    modalImages: LIST - STRING list of references that lead to the images you want to display in the carousel
    aboutProject: STRING a longer, paragraph or two description of the project, including pros and cons
    technologies: LIST - STRING a list of technologies employed on the project
    githubLink: STRING the link to this project's Github repo. 
*/
const CardDemo = (props) => {
    /*our state and event handlers. 
        The state is used to store a boolean that will open or close our Dialog component depending on the value.
        handleClickOpen and handleClickClose are used to toggle the state's value between true and false.
    */
    const [open, setOpen] = useState(false);
    const handleClickOpen = (event) => {
        setOpen(true);
    };
    const handleClickClose = (event) => {
        setOpen(false);
    };

    //This sets the gradient color for the Card's overlay and for the AppBar inside the Dialog component.
    //We start with gray as a default, in case no gradient is picked.
    let gradientColor1 = '#888';
    let gradientColor2 = '#888';
    //These switch statements run through the value of the gradientColor props and update the local
    //gradientColor variables accordingly
    switch(props.gradientColor1) {
        case 'pink':
            gradientColor1 = '#F15BB5';
            break;
        case 'purple':
            gradientColor1 = '#9B5DE5';
            break;
        case 'blue':
            gradientColor1 = '#00BBF9';
            break;
        case 'green':
            gradientColor1 = '#00F5D4';
            break;
        case 'yellow':
            gradientColor1 = '#FEE440';
            break;
        default:
            break;
    }
    switch(props.gradientColor2) {
        case 'pink':
            gradientColor2 = '#F15BB5';
            break;
        case 'purple':
            gradientColor2 = '#9B5DE5';
            break;
        case 'blue':
            gradientColor2 = '#00BBF9';
            break;
        case 'green':
            gradientColor2 = '#00F5D4';
            break;
        case 'yellow':
            gradientColor2 = '#FEE440';
            break;
        default:
            break;
    }

    /*I use this makeStyles stylesheet mostly for styles that rely on props*/
    const useStyles = makeStyles ({
        //This class targets the Dialog component
        dialogRoot: {
            backgroundColor: '#202030',
        },
        //This class targets the gradient overlay button
        overlayButton: {
            backgroundImage: `linear-gradient(0.25turn, ${gradientColor1}, ${gradientColor2})`,
            opacity: '0',
        },
        //This class targets the AppBar inside the Dialog
        appBar: {
            backgroundImage: `linear-gradient(0.25turn, ${gradientColor1}, ${gradientColor2})`,
            position: 'static',
        },
        //This class targets the text in the AppBar, inside the Dialog component
        modalTitle: {
            fontSize: '24px',
            fontWeight: '500'
        },
        //This class targets the client name in the Dialog component
        modalClient: {
            marginTop: '40px',
            fontSize: '48px',
            fontFamily: 'Raleway',
            textAlign: 'center',
        },
        //This class targets the short description of the project in the Dialog component
        modalDescription: {
            textAlign: 'center',
        },
        //This class targets the button that says 'View Website'
        viewWebsiteButton: {
            backgroundColor: `${gradientColor1} !important`,
            color: 'white !important',
        },
        //This class targets the Github button at the bottom of the Dialog component
        githubButton: {
            backgroundColor: 'black',
            color: 'white !important',
        },
    });

    //This stores the list of styles I created in an easier-to-use variable
    const classes = useStyles();



    //This is what will be returned from this component
    return(
        <Card className="cardDemo__root">
            {/*This container holds our portfolio card*/}
            <div className="cardDemo__cardMedia-container">
                <CardMedia 
                        image={props.image}
                        title={props.imageTitle}
                        className="image"   
                        />
                <div className={`overlay ${classes.overlayButton}`} onClick={handleClickOpen}>
                    <Icon className="overlay-icon">search</Icon>
                </div>

                {/* This is the Dialog component that opens after clicking on a card's image*/}
                <Dialog fullScreen open={open} onClose={handleClickClose} TransitionComponent={Transition} className={classes.dialogRoot}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClickClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography component="h4" className={classes.modalTitle}>
                                {props.client}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Typography component="h2" className={classes.modalClient}>{props.client}</Typography>
                    <Typography component="h4" className={classes.modalDescription}>{props.description}</Typography>
                    {/*We are using the props.modalImages list to make a carousel of images inside the Dialog compoonent*/}
                    <Carousel>
                        {props.modalImages.map(({ image, title }) => (
                            <CarouselSlide key={image}>
                                <Card>
                                    <CardMedia
                                    image={image}
                                    title={title}
                                    style={{
                                        paddingTop: '75%',
                                    }}
                                    />
                                </Card>
                            </CarouselSlide>
                        ))}
                    </Carousel>
                    {/*I wrapped everything after the carousel in a container so I can size it all properly.  I didn't want 
                        the content to be full screen, and I wanted it all to line up with the carousel.*/}
                    <div className="postCarouselContainer">
                        <div className="websiteButton">
                            <Button variant="contained" 
                                    className={`${classes.viewWebsiteButton} viewWebsiteButton`}
                                    endIcon={<Icon className="fas fa-bolt"></Icon>}>
                                <a href={props.url}>Visit Website</a>
                            </Button>
                        </div>
                        <Typography component="h3"
                                    variant="title"
                                    className="aboutProject-title">
                                        About This Project
                        </Typography>
                        <Divider />
                        <Typography component="p"
                                    variant="body1"
                                    className="aboutProject-body">
                                        {props.aboutProject}
                        </Typography>
                        <Typography component="h3"
                                    variant="title"
                                    className="techSheet-title">
                                        Technical Sheet
                        </Typography>
                        <Typography component="h4"
                                    variant="subtitle"
                                    className="techSheet-subtitle">
                                    Code technologies that I got involved with while working on this project.
                        </Typography>
                        <Divider />
                        {/*The tech sheet list is created by mapping out the technologies list from our props*/}
                        <ul className="technologies-list">
                            {props.technologies.map((name, index) => {
                                return <li key={ index }>{name}</li>;
                            })}
                        </ul>
                        <div className="githubButton">
                            <Button variant="contained" 
                                    className={`${classes.githubButton} viewGithubButton`}
                                    endIcon={<Icon className="fab fa-github"></Icon>}>
                                <a href={props.githubLink}>Github Repo</a>
                            </Button>
                        </div>
                    </div>
                </Dialog>
            </div>
            <Typography component="h2">{props.client}</Typography>
            <Typography component="h4">{props.subtitle}</Typography>
        </Card>
    )
};

export default CardDemo;