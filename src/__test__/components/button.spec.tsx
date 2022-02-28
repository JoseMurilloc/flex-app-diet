import { Button } from "../../components/Button"
import { render } from "@testing-library/react-native"
import { ThemeProvider } from "styled-components/native"
import theme from "../../global/styles/theme"


const Providers: React.FC = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);


describe('Button Component', () => {
  it('Check if Button render name correctly based in props pass', () => {
    const textVerify = "Adicionar"
    const { getByText } = render(
      <Button buttonText={textVerify} />, 
      {
        wrapper: Providers
      }
    )
  
    const selectedText = getByText(textVerify)
  
    expect(selectedText.props.children).toContain(textVerify)
  })

  it("Check if Button it's opacity correctly based prop active", () => {
   
    const { getByTestId } = render(
      <Button 
        testID="button-add-meal"
        active={false}
        disabled={true}
        buttonText="Adicionar Refeição"
      />,
      {
        wrapper: Providers
      }
    )
    const buttonAddMeal = getByTestId("button-add-meal")
    
    expect(buttonAddMeal.props.style.opacity).toEqual(0.3);
  })
})