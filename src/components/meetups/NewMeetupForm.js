import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import {useRef} from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) =>{
    event.preventDefault();

    const titleInput = titleInputRef.current.value;
    const imageInput = imageInputRef.current.value;
    const addressInput = addressInputRef.current.value;
    const descriptionInput = descriptionInputRef.current.value;
    
    const meetupData = {
      title: titleInput,
      image: imageInput,
      address: addressInput,
      description: descriptionInput
    }
    
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form action="" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id ="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id ="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id ="address" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea name="" id="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
