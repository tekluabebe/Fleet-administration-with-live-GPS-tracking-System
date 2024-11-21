<FormContainer onSubmit={handleSubmit}>
<InputContainer>
  <label>First Name:</label>
  <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
</InputContainer>
<InputContainer>
  <label>Last Name:</label>
  <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
</InputContainer>
<InputContainer>
  <label>Email:</label>
  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</InputContainer>
<InputContainer>
  <label>Address:</label>
  <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
</InputContainer>
<InputContainer>
  <label>Password:</label>
  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</InputContainer>
<ButtonContainer>
  <Button type="submit" content="Register" />
</ButtonContainer>
</FormContainer>
);
};

const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 1rem;

label {
margin-bottom: 0.5rem;
}
`;

const Input = styled.input`
padding: 0.5rem;
border-radius: 5px;
border: none;
background-color: #f2f2f2;
width: 100%;
`;

const ButtonContainer = styled.div`
margin-top: 1rem;
`;


