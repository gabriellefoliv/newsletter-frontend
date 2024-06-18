import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export function useSendMail(){
    const { mutate, isSuccess, isError }  = useMutation({
        mutationFn: (data: { email: string }) => {
          return axios.post('https://hofh3zwbiasu5qmmzushgrzapu0rfnle.lambda-url.us-east-2.on.aws/', data)
        }
    })

    return {
        isSuccess,
        mutate,
        isError
    }
}