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
          to: 'contato@alucardanimes.com.br',
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

          {/* Regras Principais */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent mb-12">
            <CardHeader>
              <CardTitle className="text-white text-2xl font-black">📋 Regras Principais</CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-4">
              <div>
                <h4 className="font-bold text-accent mb-2">Músicas Aceitas:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Canções-tema ou músicas originais de animes</li>
                  <li>Músicas de live-actions (tokusatsu)</li>
                  <li>Vocaloid</li>
                  <li>Games (somente música original do jogo)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Quem pode participar:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Pessoas com idade superior a 3 anos</li>
                  <li>Vetada a participação de parceiros, jurados e equipe organizadora</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Requisitos:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Mínimo de 3 e máximo de 10 participantes por dia</li>
                  <li>Pen drive com Playback (áudio sem voz) em formato MP3</li>
                  <li>3 cópias impressas da tradução da letra concede bônus de 0,5 ponto</li>
                  <li>Reunir 30 minutos antes do concurso ao lado do palco</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Proibições:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Uso de objetos/materiais como fonte sonora (instrumentos musicais)</li>
                  <li>Porte de itens perigosos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Critérios de Avaliação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Afinação</li>
                  <li>Tempo</li>
                  <li>Dicção/Pronúncia</li>
                  <li>Potência Vocal</li>
                  <li>Interpretação/Coreografia</li>
                  <li>Dificuldade técnica da música</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Premiação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Só haverá premiação se o vencedor alcançar nota final superior a 7,0</li>
                  <li>1º Lugar: Medalha + Kit de produtos dos apoiadores</li>
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
