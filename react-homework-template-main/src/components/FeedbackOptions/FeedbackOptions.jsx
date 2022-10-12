import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick }) =>  {
   
      return(
         <div>
            <button type="button" name="good" onClick={onClick}>
               Good
            </button>
            <button type="button" name="neutral" onClick={onClick}>
               Neutral
            </button>
            <button type="button" name="bad" onClick={onClick}>
               Bad
            </button>
         </div>
      )
   
}

FeedbackOptions.propTypes = {
   onClick: PropTypes.func.isRequired,
} 


