import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { 
  Switch, 
  Chip, 
  Button, 
  FormControlLabel, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormControl,
  ClickAwayListener, 
} from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles'
import * as styles from './Modal.styles'
import languagesObj from '../../utils/supportedLanguages'
import { v4 as uuidv4 } from 'uuid'
import CodeBlock from '../Code'
import * as actions from '../../redux/actions/actions'

const Modal = ({ changeIsOpen, editDetails, setEditDetails, userId, userPosts, setSearchResults, editPost, createPost }) => {
  const classes = makeStyles(styles.materialStyles)
  const [tagText, setTagText] = useState('')
  const [userInput, changeUserInput] = useState(editDetails?  {...editDetails} : {
    user_id: userId,
    tags: [], 
    public: true, 
    language: 'Javascript', 
    description: '',
    snippet: "",
    _id: userId, 
    filename: '', 
    idx: 0, 
    createdAt: '', 
    updatedAt: '', 
    _v: ''
  })


  const handleTagInput = async(e) => {
    await setTagText(e?.target.value || e.value)

    if(e.target.value.includes(',') || e.target.value.includes(' ')) {
      const newTagText = tagText.slice(0, tagText.length)

      const tagsArray = userInput.tags
      tagsArray.push(newTagText)

      await changeUserInput({...userInput, tags: tagsArray})

      setTagText('')
      e.target.value = ''
    }
      
  }

  const selectLanguage = async (e) => {
    changeUserInput({...userInput, language: e.target.value})
  }

  const deleteTag = async (idx) => {
    let newTags = userInput.tags
    newTags.splice(idx, 1)
    await changeUserInput({...userInput, tags: newTags})
  }

  const createOrUpdateSnippet = async (e) => {
    e.preventDefault()
    if(editDetails) updateSnippet()
    else createSnippet()
  }

  const createSnippet = async () => {
    // await axios.post(`/kipper/${userId}`, userInput)
    // // changeUserPosts([...userPosts, userInput])
    // setSearchResults([...userPosts, userInput])
    createPost(userInput)

    setEditDetails(null) 
    changeIsOpen(false) 
  }

  const updateSnippet = () => {
    editPost(userInput)
    setEditDetails(null)
    changeIsOpen(false)
  }

  const closeModal = (e) => {
    changeIsOpen(false)
    setEditDetails(null)
  }

  return ReactDOM.createPortal(
    <ClickAwayListener onClickAway={closeModal}>
      <styles.Container onSubmit={(e) => e.preventDefault()}>

      <CancelIcon onClick={closeModal} className={classes.exitIcon}/>

      {/* Select Language */}
      <FormControl>
        <InputLabel id="language" >Language</InputLabel>
          <Select 
            labelId="language" 
            value={userInput?.language} 
            onChange={selectLanguage} 
            defaultValue="Javascript" 
            variant="filled" 
            className={classes.selectElement}>
            {Object.keys(languagesObj).map((language) => (
              <MenuItem key={uuidv4()} value={language} >
                {language}
              </MenuItem>
            ))}
          </Select>
      </FormControl>

      {/* text input */}
      <styles.Label htmlFor="code-snippet">Copy code here: </styles.Label>
      <styles.TextArea 
        id="code-snippet" 
        onChange={e => changeUserInput({...userInput, snippet: e.target.value})} 
        placeholder ="const snippet = 'Insert text here'" 
        value={userInput?.snippet || undefined} />

      {/* code block */}
      <CodeBlock 
        code={userInput?.snippet || "const snippet = 'Insert text here'"} 
        language={userInput?.language || 'javascript'} 
        height="5rem"/>

      {/* description*/}
      <styles.Label htmlFor="description">Description</styles.Label>
      <styles.Description 
        id="description"
        placeholder={userInput?.description || 'Insert Description here...'} 
        value={userInput?.description || undefined}
        onChange={(e) => changeUserInput({...userInput, description: e.target.value})} 
        />

      {/* Privacy switch */}
      <FormControlLabel
        control={<Switch checked={userInput?.public} color="primary"/>}
        label={userInput?.public? 'Public': 'Private'}
        onClick={() => changeUserInput({...userInput, public: !userInput.public})}
        />

      {/* tag input */}
      <styles.Label htmlFor="tags">
        Tags - Press the &nbsp;
        <strong>space key</strong> 
        &nbsp;or insert a &nbsp; 
        <strong>comma</strong> 
        ( , ) to add a new tag
      </styles.Label>
      <styles.Input id="tags" placeholder="Insert tags here..." onChange={handleTagInput}/>
        
      {/* tag chip container */}
      <styles.TagsContainer >
      {userInput?.tags?.length > 0 ? userInput.tags.map((tag, idx) => (
        <Chip 
          variant="default" 
          key={uuidv4()} 
          color="primary" 
          label={`#${tag}`}
          onDelete={() => deleteTag(idx)} 
          className={classes.chip} 
          size="medium" />
      )): null}
      </styles.TagsContainer>

      {/* submit button */}
      <Button 
        variant="contained" 
        className={classes.button} 
        color="primary" 
        disableElevation 
        onClick={createOrUpdateSnippet}
      >
        Submit
      </Button>
      </styles.Container>
    </ClickAwayListener>
    
  , document.querySelector('#portal')
  )
}



const mapDispatchToProps = (dispatch) => ({
  editPost: post => dispatch(actions.editPost(post)), 
  createPost: post => dispatch(actions.createUserPost(post))
})



export default connect(null, mapDispatchToProps)(Modal)
