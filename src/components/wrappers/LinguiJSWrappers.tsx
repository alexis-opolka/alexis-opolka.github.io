// NextJS
import { FormControl, Select, Box } from "@primer/react";
import { dynamicLoadNActivateLocale } from "@/headers/i18n";

export function LinguiLocaleChangeForm(){

  function setCurrentLocale(locale: string){
    console.log(`[LOG]: setCurrentLocale -> ${locale}`);
    dynamicLoadNActivateLocale(locale);
  };

  // type ReactMouseEvent<HTMLOptions, MouseEvent>;

  function localeChangeFormHandler(event: React.MouseEvent): void{
    const targetedNode = "OPTION"; // The node we know we should be working with

    console.log(event.currentTarget);

  }

  return(
    <Box as={"form"}>
      <FormControl id="lingui-locale">
        <FormControl.Label>
          <Select>
            <Select.Option value={"en"} onClick={(event) => {
              localeChangeFormHandler(event);
            }}>
              EN
            </Select.Option>
            <Select.Option value={"fr"} onClick={(event) => {
              localeChangeFormHandler(event)
            }}>
              FR
            </Select.Option>
          </Select>
        </FormControl.Label>
      </FormControl>
    </Box>
  )
}
