import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles"
import styles from "./index.module.scss"
export const RegisterForm = () => {
    return <form>
        <InputContainer className={styles.form}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField type="email" id="email" />
        </InputContainer>
        <section className={styles.nameFieldRow}>
            <InputContainer>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <InputField type="text" id="firstName" />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <InputField type="text" id="lastName" />
            </InputContainer>
        </section>
        <InputContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField type="password" id="password" />
        </InputContainer>
        <Button className={styles.button}>Create my account</Button>
    </form>
}