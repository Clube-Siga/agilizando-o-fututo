import { useForm } from '@inertiajs/react';
import Content from "../../Components/Content/Content";
import Label from "../../Components/Label/Label";
import Text from "../../Components/Text/Text";
import Title from "../../Components/Title/Title";

export default function Contact({contactClass}){
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        assunto: '',
        menssagem: '',
    });
    
    function submit(e) {
        e.preventDefault(); // Prevent default form submission
    
        // Send form data to the server using Inertia
        post(route('contact'), data, { 
                preserveScroll: true,
                onSuccess: () => reset(),
            }
        ); 

  
    }
    
    return (
        <>
            <section id="contact" className={contactClass}>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <Title titleClass={"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"} titleContent={"Contact Us"}/>
                    <Text textClass={"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"} textContent={"Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."}/>
                    
                    <form onSubmit={submit} className="space-y-8">
                        <div>
                            <Label objective={"email"}>
                                Your email
                            </Label>
                            <input
                                value={data.email}
                                onChange={(event) => setData('email', event.target.value)}
                                type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                required
                            />
                             {errors.email && <div>{errors.email}</div>}
                        </div>
                        <div>
                            <Label objective={"assunto"}>
                                Subject
                            </Label>
                            <input
                                value={data.subject}
                                onChange={(event) => setData('assunto', event.target.value)}
                                type="text"
                                id="assunto"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let us know how we can help you"
                                required
                            />
                            {errors.assunto && <div>{errors.assunto}</div>}
                        </div>
                        <Content contentClass={"sm:col-span-2"}>
                            <Label objective={"menssagem"}>
                                Your message
                            </Label>
                            <textarea
                                value={data.menssagem}
                                onChange={(event) => setData('menssagem', event.target.value)}
                                id="menssagem"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </Content>

                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            Enviar
                        </button>

                    </form>

                </div>
            </section>
        </>
    )
}
