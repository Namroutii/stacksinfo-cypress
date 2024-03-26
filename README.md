# stacksinfo-cypress

## End-to-End Testing Report: Search Functionality on StackInfo Site

### Test Environment:
- **Testing Framework:** Cypress
- **Website Under Test:** [StackInfo](https://stacksinfo.web.app/)

### Test Summary:
Out of 20 test cases executed, 15 passed successfully, while 5 failed.

### Test Results:

1. **Should allow typing a search query** - **Passed**
   - Users can type a search query into the search bar.

2. **Should verify search field presence** - **Passed**
   - The search field is present and visible.

3. **Should allow entering valid and not invalid inputs** - **Failed**
   - Validation of inputs encountered failures.

4. **Should display relevant cards when searching for an existing company** - **Passed**
   - Relevant cards are displayed for existing companies.

5. **Should display cards for companies using a specific technology** - **Passed**
   - Cards are displayed for companies using a specific technology.

6. **Should support searching for multiple keywords** - **Passed**
   - Searching for multiple keywords returns relevant results.

7. **Should display an error message for URL input** - **Passed**
   - Correctly displays an error message for URL input.

8. **Should display an error message for empty input** - **Failed**
   - Failed to display an error message for empty input. it display all companies.

9. **Should display an error message for invalid input** - **Passed**
   - Successfully displayed an error message for invalid input.

10. **Should clear search results when "Remove All" button is clicked** - **Passed**
    - Clears search results upon clicking "Remove All" button.

11. **Should display an error message for number input** - **Failed**
    - Failed to display an error message for number input. Further investigation needed.

12. **Should persist search results after refreshing the page** - **Failed**
    - Search results were not persisted after refreshing the page.

13. **Should allow typing a search query in lower case only** - **Passed**
    - Allows typing a search query in lower case.

14. **Should allow typing a search query in upper case only** - **Passed**
    - Allows typing a search query in upper case.

15. **Should allow typing a search query in both lower and upper cases** - **Passed**
    - Allows typing a search query in both lower and upper cases.

16. **Should allow typing a partial search query** - **Passed**
    - Partial search queries return relevant results.

17. **Should have a Placeholder Text in Search Input Field** - **Passed**
    - Displays the placeholder text in the search input field.

18. **Should display valid output after clicking on the search button** - **Failed**
    - Failed to display valid output after clicking on the search button. Further investigation needed.

19. **Should display relevant cards when searching for a partial existing company** - **Passed**
    - Relevant cards are displayed when searching for a partial existing company.

20. **Should display relevant cards when searching for a partial existing city** - **Passed**
    - Relevant cards are displayed when searching for a partial existing city.

### Conclusion:
The test suite provided valuable insights into the functionality of the search feature on the StackInfo website. While many aspects of the search functionality worked as expected, there are areas that require further investigation and potential refinement in the test scenarios.