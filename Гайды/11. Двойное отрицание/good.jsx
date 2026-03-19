import { useState } from "react"

const App = () => {
    const [isVisible, setisVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [hasErrors, setHasErrors] = useState(false)

    return (
        <div>
            {isVisible && <div>Компонент</div>}
            {isLoading && <div>Компонент</div>}
            {isVisible && <div>Компонент</div>}
        </div>
    )
}