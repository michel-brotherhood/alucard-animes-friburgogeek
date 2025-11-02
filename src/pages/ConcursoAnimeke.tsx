import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Users, Award, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  idade: z.string().min(1, "Idade é obrigatória"),
  musica: z.string().min(2, "Nome da música é obrigatório").max(200),
  anime: z.string().min(2, "Nome do anime/jogo é obrigatório").max(200),
  idioma: z.string().min(2, "Idioma é obrigatório").max(50),
  observacoes: z.string().max(500, "Observações muito longas").optional(),
});

const ConcursoAnimeke = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      idade: "",
      musica: "",
      anime: "",
      idioma: "",
      observacoes: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'friburgogeek@alucardanimes.com.br',
          subject: 'Nova Inscrição - Campeonato Animekê',
          formData: values,
          formType: 'Campeonato Animekê'
        }
      });

      if (error) throw error;

      toast({
        title: "Inscrição enviada!",
        description: "Você receberá um email de confirmação em breve.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Erro ao enviar inscrição",
        description: "Por favor, tente novamente ou entre em contato conosco.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-primary to-secondary">
      <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CAMPEONATO ANIMEKÊ
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Mostre seu talento vocal cantando suas músicas favoritas! 🎤
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">Medalha + Kit de produtos</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Idade Mínima</h3>
                <p className="text-white/80 text-sm">A partir de 3 anos</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Mic className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Modalidade</h3>
                <p className="text-white/80 text-sm">Individual</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Music className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Vagas</h3>
                <p className="text-white/80 text-sm">3 a 10 por dia</p>
              </CardContent>
            </Card>
          </div>

          {/* Regras Completas */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 REGULAMENTO COMPLETO DO CAMPEONATO ANIMEKÊ</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-6">
              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">1) INTRODUÇÃO</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>1.1</strong> – O campeonato de Animekê no Friburgo Geek é um concurso cultural de canto onde são apresentadas apenas canções tema ou músicas originais de animes, live-actions (tokusatsu), vocaloid, games (somente música original do jogo, fica vetada as músicas de jogos musicais – tais como Guitar Hero, Ouedan, Rock Band e demais jogos deste gênero); a música deve ser de um idioma real, podendo ser cantada no idioma original ou na sua versão adaptada para diferentes países</li>
                  <li><strong>1.2</strong> – O concurso é aberto para pessoas com idade superior a 03 anos; sendo vetada a participação de parceiros do evento, jurados, equipe organizadora do evento</li>
                  <li><strong>1.3</strong> – O participante concorda em liberar o uso da sua imagem para fins de divulgação</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">2) INSCRIÇÃO</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>2.1</strong> – No mínimo 03 participantes e no máximo 10 participantes por dia; caso não alcance o número mínimo de inscritos, o concurso será cancelado; mesmo sem a quantidade mínima de inscritos para a realização do concurso, os participantes poderão se apresentar, valendo um brinde de participação</li>
                  <li><strong>2.2</strong> – Pré-inscrição: o participante preencherá o formulário na página do evento e no dia do evento confirmará a inscrição na área Karaokê; a pré-inscrição garantirá a vaga até 02 (duas) horas após a abertura do evento</li>
                  <li><strong>2.3</strong> – As inscrições são realizadas na central de inscrições até 01 (uma) hora antes do início do concurso; havendo desistência de algum inscrito, a vaga ficará aberta até encerrar o período de inscrições</li>
                  <li><strong>2.4</strong> – No ato da inscrição, o participante:
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li><strong>2.4.1</strong> – Deve apresentar documento com foto original, próprio ou de um responsável</li>
                      <li><strong>2.4.2</strong> – Deve entregar um pen drive com o Playback (áudio sem voz, apenas com a parte instrumental) gravado em formato .MP3. Haverá no dia do evento uma lista de Playbacks disponíveis, porém não serão aceitas reclamações se forem usados os Playbacks desta lista ou más gravações dos participantes</li>
                      <li><strong>2.4.3</strong> – Tem a opção de entregar 03 (três) cópias impressas da tradução da letra da música ou de sua letra quando cantada na versão em português; sendo concedido um bônus de 0,5 (meio) ponto na média final</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">3) APRESENTAÇÃO</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>3.1</strong> – Os participantes devem se reunir 30 (trinta) minutos antes do concurso, ao lado do palco, para serem organizados em fila e manter-se nela até o momento de sua apresentação; o participante que não estiver presente quando chegar sua vez será imediatamente desclassificado</li>
                  <li><strong>3.2</strong> – O participante deve entrar e sair do palco pelos lados indicados pela organização do evento</li>
                  <li><strong>3.3</strong> – Em caso de apresentação com qualquer tipo de ofensas, constrangimentos ou apelo sexual, que firam as disposições criminais, o participante será desclassificado, e ele ou seus responsáveis legais responderão criminalmente por seus atos</li>
                  <li><strong>3.4</strong> – O evento proverá um microfone e sistema de som adequado para realizar a apresentação; e não disponibilizará tomada ou qualquer instalação elétrica auxiliar no palco</li>
                  <li><strong>3.5</strong> – É vetado o uso de objetos/matérias como fonte sonora (instrumentos musicais, sinos, caixas de som, buzinas, geradores de ruído, etc.) e qualquer banner ou faixa divulgando algum site ou empresa, sem autorização da organização do evento</li>
                  <li><strong>3.6</strong> – É vetado o porte e uso de itens e objetos que possam representar perigo às pessoas presentes</li>
                  <li><strong>3.7</strong> – Caso haja problemas de responsabilidade do evento (como falhas na aparelhagem de som ou queda de força) e o participante for prejudicado, ele poderá reiniciar sua apresentação ou repeti-la no final do concurso</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">4) CRITÉRIOS DE AVALIAÇÃO E DESEMPATE</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>4.1</strong> – A banca de jurados será composta de até 03 (três) juízes sendo: musicistas, vocalistas com experiência comprovada, intérpretes e entusiastas; cujas notas serão consideradas plenas e também inquestionáveis</li>
                  <li><strong>4.2</strong> – Cada um receberá nota única de 05 (cinco) a 10 (dez), podendo haver números fracionados de no máximo 0,1. A nota 00 (zero) será dada apenas aos participantes desclassificados</li>
                  <li><strong>4.3</strong> – O cálculo da nota é realizado através de uma média aritmética dos quesitos</li>
                  <li><strong>4.4</strong> – Os quesitos de avaliação são: afinação, tempo, dicção/pronúncia, respiração, potência vocal, finalizações, vibrato, impostação vocal, interpretação/coreografia, postura vocal. Será levada em conta a dificuldade técnica da música executada pelo candidato</li>
                  <li><strong>4.5</strong> – Em caso de empate nas notas finais dos primeiros colocados e sujeitos a premiação caberá ao júri e a coordenação do evento a decidir o desempate</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-3 text-lg">5) VENCEDORES, PREMIAÇÃO E DEMAIS OBSERVAÇÕES</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li><strong>5.1</strong> – Só haverá premiação e classificação se o participante com maior pontuação alcançar uma nota final maior que 7,0 (sete)</li>
                  <li><strong>5.2</strong> – O prêmio para o vencedor:
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li><strong>5.2.1</strong> – 01º lugar: kit de produtos dos apoiadores do evento. O vencedor será anunciado no palco e o prêmio será entregue no ato; A premiação não será enviada pelo correio ou entregue após o evento</li>
                    </ul>
                  </li>
                  <li><strong>5.3</strong> – Os casos omissos no regulamento serão analisados pela coordenação do evento e a sua decisão será soberana e inquestionável</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Formulário de Inscrição */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent">
            <CardHeader>
              <CardTitle className="text-white text-3xl font-black text-center">
                FORMULÁRIO DE INSCRIÇÃO
              </CardTitle>
              <p className="text-white/80 text-center">Preencha os dados abaixo para se inscrever</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="idade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Idade *</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Sua idade" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="musica"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome da Música *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da música que irá cantar" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="anime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Anime/Game de Origem *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Naruto, Final Fantasy, etc." {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="idioma"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Idioma da Música *</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: Japonês, Português, Inglês" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="observacoes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Observações (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Alguma informação adicional que gostaria de compartilhar"
                            className="bg-white/20 text-white border-white/30 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                    <p className="text-white/90 text-sm font-bold">📝 Lembre-se:</p>
                    <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                      <li>Traga o playback em pen drive no formato MP3</li>
                      <li>3 cópias impressas da letra traduzida garantem 0,5 ponto extra</li>
                      <li>Compareça 30 minutos antes do concurso ao lado do palco</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    ENVIAR INSCRIÇÃO
                  </Button>

                  <div className="text-center bg-white/5 rounded-lg p-4 md:p-6">
                    <p className="text-white/90 mb-4 text-sm md:text-base">Dúvidas ou prefere se inscrever por e-mail?</p>
                    <a 
                      href="mailto:friburgogeek@alucardanimes.com?subject=Inscrição%20Campeonato%20Animekê"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto bg-accent hover:bg-accent/90 text-secondary font-bold px-6 md:px-8 py-3 md:py-4 rounded-full transition-all hover:scale-105 text-sm md:text-base"
                    >
                      📧 Enviar E-mail
                    </a>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default ConcursoAnimeke;
