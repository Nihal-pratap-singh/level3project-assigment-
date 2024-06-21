import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConditionalSection from './ConditionalSection';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [surveyTopic, setSurveyTopic] = useState('');
  const [favoriteLanguage, setFavoriteLanguage] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [dietPreference, setDietPreference] = useState('');
  const [highestQualification, setHighestQualification] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [feedback, setFeedback] = useState('');
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  useEffect(() => {
    if (surveyTopic) {
      // Simulate fetching additional questions from an API
      axios.get(`https://api.example.com/questions?topic=${surveyTopic}`)
        .then(response => {
          setAdditionalQuestions(response.data);
        })
        .catch(error => {
          console.error('Error fetching additional questions:', error);
        });
    }
  }, [surveyTopic]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation logic
    // Submission logic (e.g., send data to server)
    console.log({
      fullName,
      email,
      surveyTopic,
      favoriteLanguage,
      yearsOfExperience,
      exerciseFrequency,
      dietPreference,
      highestQualification,
      fieldOfStudy,
      feedback,
      additionalQuestions
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Survey Topic:
        <select value={surveyTopic} onChange={(e) => setSurveyTopic(e.target.value)} required>
          <option value="">Select...</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
      </label>
      <br />

      {/* Conditional Sections */}
      {surveyTopic === 'Technology' && (
        <ConditionalSection
          title="Technology Section"
          fields={[
            { label: 'Favorite Programming Language', value: favoriteLanguage, onChange: setFavoriteLanguage },
            { label: 'Years of Experience', value: yearsOfExperience, onChange: setYearsOfExperience }
          ]}
        />
      )}

      {surveyTopic === 'Health' && (
        <ConditionalSection
          title="Health Section"
          fields={[
            { label: 'Exercise Frequency', value: exerciseFrequency, onChange: setExerciseFrequency },
            { label: 'Diet Preference', value: dietPreference, onChange: setDietPreference }
          ]}
        />
      )}

      {surveyTopic === 'Education' && (
        <ConditionalSection
          title="Education Section"
          fields={[
            { label: 'Highest Qualification', value: highestQualification, onChange: setHighestQualification },
            { label: 'Field of Study', value: fieldOfStudy, onChange: setFieldOfStudy }
          ]}
        />
      )}

      <br />
      <label>
        Feedback:
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required minLength="50" />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
