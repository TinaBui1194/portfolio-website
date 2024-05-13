import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Send } from "lucide-react";

export function App() {
	return (
		<div className="flex min-h-screen w-full justify-center items-center">
			<Card className="h-auto w-11/12 lg:w-1/2">
				<CardContent className="pt-10">
					<div className="flex flex-col items-center space-y-4">
						<Avatar className="h-20 w-20">
							<AvatarImage
								src="https://github.com/tinathuybui.png"
								alt="tinathuybui"
								className="object-cover"
							/>
							<AvatarFallback>TB</AvatarFallback>
						</Avatar>

						<div className="text-center">
							<h1 className="text-3xl font-bold">Tina Bui</h1>
							<p className="text-xl text-gray-500 pt-5">
								Verrsatile individual with an accounting background
								transitioning to the Data Analytics field. Excellent
								understanding and proficiency of platforms for effective data
								analyses, including SQL, spreadsheets and Tableau. Strong
								problem solving and analytical skills with experience in
								collecting, transforming and organising data
							</p>
						</div>
					</div>
				</CardContent>
				<CardFooter className="px-4 py-2 justify-center pb-10">
					<div className="flex space-x-4">
						<a href="https://www.linkedin.com/in/tinathuybui/" target="_blank">
							<Linkedin />
						</a>
						<a href="mailto:buithuytien_hdvn@yahoo.com" target="_blank">
							<Send />
						</a>
						<a href="https://github.com/tinathuybui/">
							<Github />
						</a>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}

export default App;
