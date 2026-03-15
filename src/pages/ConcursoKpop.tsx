import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Users, Calendar, Heart, Zap, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import kpopBackground from "@/assets/kpop-background.jpg";

const formSchema = z.object({
  nomeGrupo: z.string().min(3, "Nome do grupo deve ter no mínimo 3 caracteres").max(100),
  lider: z.string().min(3, "Nome do líder é obrigatório").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  numeroIntegrantes: z.string().min(1, "Número de integrantes é obrigatório"),
  musica: z.string().min(2, "Nome da música é obrigatório").max(200),
  artista: z.string().min(2, "Nome do artista é obrigatório").max(200),
});

const ConcursoKpop = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeGrupo: "",
      lider: "",
      email: "",
      telefone: "",
      numeroIntegrantes: "",
      musica: "",
      artista: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Save to database
      await (supabase.from('form_submissions') as any).insert({
        form_type: 'kpop',
        form_data: values,
        email: values.email,
      });

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'friburgogeek@alucardanimes.com.br',
          subject: 'Nova Inscrição - K-Stage Live',
          formData: values,
          formType: 'K-Stage Live'
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
    <div className="min-h-screen relative overflow-hidden">
      <SEO 
        title="K-Stage Live 2026 - Apresentação de Dança K-pop"
        description="K-Stage Live no Friburgo Geek: apresentação livre de dança K-pop! Vagas limitadas, sem competição. Inscrição inclui entrada para até 5 integrantes."
        canonical="/concursos/kpop"
        keywords="k-stage live, dança k-pop, apresentação k-pop, cover k-pop, Nova Friburgo, Friburgo Geek"
      />
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${kpopBackground})`,
          filter: 'blur(3px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-secondary opacity-75" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            K-STAGE LIVE
          </h1>
          <p className="text-xl text-white/90 text-center mb-12 max-w-3xl mx-auto">
            Se você ama dançar e quer brilhar diante do público, essa é a sua chance! 💜
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-primary/60 backdrop-blur-sm border-0 rounded-2xl">
              <CardContent className="pt-6 text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Sem Competição</h3>
                <p className="text-white/80 text-sm">Performance livre - é só subir e arrasar!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/60 backdrop-blur-sm border-0 rounded-2xl">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Vagas Limitadas</h3>
                <p className="text-white/80 text-sm">3 solos + 3 grupos</p>
              </CardContent>
            </Card>

            <Card className="bg-primary/60 backdrop-blur-sm border-0 rounded-2xl">
              <CardContent className="pt-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Data do Evento</h3>
                <p className="text-white/80 text-sm">Domingo, 18 de Janeiro de 2026</p>
              </CardContent>
            </Card>
          </div>

          {/* Seção Motivacional */}
          <div className="bg-primary/80 backdrop-blur-sm rounded-3xl p-8 mb-12 text-center">
            <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Se você ama dançar e quer brilhar diante do público, essa é a sua chance! 💜
            </h2>
            <p className="text-accent font-semibold flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Fique atento: as vagas são limitadas!
            </p>
          </div>

          {/* Informações Importantes - Card Único */}
          <Card className="bg-primary/80 backdrop-blur-sm border-0 rounded-3xl mb-12">
            <CardHeader>
              <CardTitle className="text-white text-xl font-black flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" />
                INFORMAÇÕES IMPORTANTES
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90 space-y-6">
              {/* Como Funciona */}
              <div>
                <h3 className="text-accent font-bold mb-3 text-lg">Como Funciona</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    As inscrições são realizadas somente pelo formulário desta página
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    As vagas serão preenchidas por ordem de inscrição
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    A inscrição inclui a entrada no evento para até 5 integrantes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    É uma apresentação livre, sem júri ou competição
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Tempo máximo de apresentação: 5 minutos
                  </li>
                </ul>
              </div>
              
              {/* Sobre a Música */}
              <div>
                <h3 className="text-accent font-bold mb-3 text-lg">Sobre a Música</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    A música deve estar no formato MP3 em um pen-drive
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Check-in até às 13h no dia do evento
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    A ordem de apresentação será definida pela organização
                  </li>
                </ul>
              </div>
              
              {/* Regras Básicas */}
              <div>
                <h3 className="text-accent font-bold mb-3 text-lg">Regras Básicas</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Proibido palavrões, apelo sexual desnecessário ou ofensas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Proibido uso de armas ou acessórios que coloquem em risco os presentes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Menores de idade precisam de autorização dos responsáveis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Não é permitido nada que suje o palco ou prejudique outras apresentações
                  </li>
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
              <p className="text-white/80 text-center">Preencha os dados do grupo abaixo</p>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nomeGrupo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Grupo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do grupo K-Pop" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lider"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Líder/Representante *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome completo do líder" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
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
                            <Input type="email" placeholder="email@exemplo.com" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
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
                            <Input placeholder="(00) 00000-0000" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="numeroIntegrantes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Número de Integrantes *</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" max="10" placeholder="Até 5 incluídos na inscrição" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
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
                            <Input placeholder="Nome da música K-Pop" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="artista"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel className="text-white">Artista/Grupo Original *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do artista/grupo original" {...field} className="bg-white/20 text-white border-white/30 placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                    <p className="text-white/90 text-sm font-bold">⚠️ Informações Importantes:</p>
                    <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                      <li>Inscrição GRATUITA</li>
                      <li>A inscrição garante entrada no evento para até 5 integrantes</li>
                      <li>Integrantes adicionais devem adquirir ingressos normalmente</li>
                      <li>Você receberá confirmação por email após o envio</li>
                    </ul>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg py-6 rounded-full"
                  >
                    ENVIAR INSCRIÇÃO
                  </Button>

                  <div className="text-center bg-white/5 rounded-lg p-4 md:p-6">
                    <p className="text-white/90 text-sm md:text-base">
                      Dúvidas? {" "}
                      <a 
                        href="mailto:friburgogeek@alucardanimes.com.br?subject=Dúvida%20-%20K-Stage%20Live"
                        className="text-accent hover:text-accent/80 underline font-semibold transition-colors"
                      >
                        Fale com a equipe Alucard
                      </a>
                    </p>
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
    </div>
  );
};

export default ConcursoKpop;
