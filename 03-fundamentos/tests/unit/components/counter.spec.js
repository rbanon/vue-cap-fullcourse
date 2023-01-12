import {shallowMount,} from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter component",() =>{

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    // test("Debe de hacer martch con el snapshot", () => {

    //     const wrapper = shallowMount(Counter)
    //     expect(wrapper.html()).toMatchSnapshot()
    // });

    test("H2 debe de tener el valor por defecto 'Counter'", () =>{

        expect(wrapper.find("h2").exists()).toBeTruthy()

        const h2Value = wrapper.find("h2").text()

        //console.log (h2.text())
        expect(h2Value).toBe('Counter')
    });

    test("El valor por defecto debe de ser 100 en el p",() => {

        expect(wrapper.find("p").exists()).toBeTruthy()

        const p2Value = wrapper.find("[data-testid='counter']").text()

        //console.log(p2Value)

        expect(p2Value).toBe("100")
    });

    test("Debe de incrementar y decrementar el contador", async() =>{

        const [increaseBtn,decreaseBtn] = wrapper.findAll("button")
        
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")

        await decreaseBtn.trigger("click")
        await decreaseBtn.trigger("click")

        const p2Value = wrapper.find("[data-testid='counter']").text()
        
        expect(p2Value).toBe("101")

    });

    test("Debe de establecer el valor por defecto", () => {
        //console.log(wrapper.props())
        const start = wrapper.props("start")
        //console.log(start)

        const value = wrapper.find("[data-testid='counter']").text()
        
        expect(Number(value)).toBe(start)
    });

    test("Debe de mostrar la prop title", () => {

        const title ="Hola mundo!"
        const wrapper = shallowMount (Counter,{
            props:{
                title
            }
        })

        expect(wrapper.find("h2").text()).toBe(title)
    }),

    test("Debe de mostrar la pro title", () => {

        const title ="Hola mundo!!!"

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })
        //console.log(wrapper.html())
        expect (wrapper.find("h2").text()).toBe(title)
    })

})