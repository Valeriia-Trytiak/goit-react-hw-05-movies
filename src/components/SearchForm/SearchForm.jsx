import { Formik } from 'formik';
import * as Yup from 'yup';
import { Error, ContainerSearchbar, SearchButton, SearchIcon, StyledForm, StyledInput } from './SearchForm.styled';

const searchSchema = Yup.object().shape({
    searchValue: Yup.string()
      .trim()
      .min(2, 'Minimum length - 2 characters')
      .max(20, 'Maximum length - 20 characters'),
  });

export const SearchForm = ({ onSubmit })=> {
    return  <ContainerSearchbar>
        <Formik
        initialValues={{ searchValue: ""}}
        onSubmit={(values, actions) => {
          const valueSearch = values.searchValue.trim();
          if (valueSearch !== "") {
            onSubmit(valueSearch);
          }
          actions.resetForm();
        }}
        validationSchema={searchSchema}>

        <StyledForm>
        <SearchButton type="submit"> 
        <SearchIcon />
        </SearchButton>
        <label htmlFor="searchValue"></label>
        <StyledInput type="text" name="searchValue" id="searchValue" placeholder="Search movies"  autoComplete="off" autoFocus/>
        <Error name="searchValue" component="span" />
      </StyledForm>
    </Formik>
    </ContainerSearchbar>
}