import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Music, Users, DollarSign, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  nomeGrupo: z.string().min(3, "Nome do grupo deve ter no mínimo 3 caracteres").max(100),
  lider: z.string().min(3, "Nome do líder é obrigatório").max(100),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(20),
  chave: z.string().min(1, "Selecione uma chave"),
  numeroIntegrantes: z.string().min(1, "Número de integrantes é obrigatório"),
  musica: z.string().min(2, "Nome da música é obrigatório").max(200),
  artista: z.string().min(2, "Nome do artista é obrigatório").max(200),
  integrantes: z.string().min(10, "Liste todos os integrantes").max(500),
  descricao: z.string().max(1000, "Descrição muito longa").optional(),
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
      chave: "",
      numeroIntegrantes: "",
      musica: "",
      artista: "",
      integrantes: "",
      descricao: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          to: 'contato@alucardanimes.com.br',
          subject: 'Nova Inscrição - Campeonato K-Pop',
          formData: values,
          formType: 'Campeonato K-Pop'
        }
      });

      if (error) throw error;

      toast({
        title: "Inscrição enviada!",
        description: "Você receberá um email de confirmação com instruções para pagamento.",
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

  const chaves = [
    { value: "old-school", label: "Chave Old School (1ª e 2ª Gerações)" },
    { value: "middle-school", label: "Chave Middle School (3ª Geração)" },
    { value: "new-school", label: "Chave New School (4ª e 5ª Gerações)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-primary to-secondary">
      <Header />
      
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-accent text-center mb-6">
            CAMPEONATO K-POP
          </h1>
          <p className="text-xl text-white/90 text-center mb-12">
            Batalha das Gerações - Mostre o poder do seu grupo! 🎤
          </p>

          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Premiação</h3>
                <p className="text-white/80 text-sm">R$ 300,00 por chave</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Integrantes</h3>
                <p className="text-white/80 text-sm">Grupos de 3 a 10 pessoas</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Inscrições</h3>
                <p className="text-white/80 text-sm">15/Jun a 16/Ago 2026</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-2 border-accent/30">
              <CardContent className="pt-6 text-center">
                <Music className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="text-white font-bold text-lg mb-2">Taxa</h3>
                <p className="text-white/80 text-sm">R$ 60,00 por pessoa</p>
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
                <h4 className="font-bold text-accent mb-2">Formato:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Modalidade exclusiva para grupos de 3 a 10 integrantes</li>
                  <li>Inscrições apenas online de 15 de Junho a 15 de Agosto de 2026</li>
                  <li>Taxa de inscrição: R$ 60,00 por pessoa (inclui entrada no evento)</li>
                  <li>O campeonato será realizado a partir das 14 horas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Chaves de Competição:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Old School:</strong> 1ª e 2ª Gerações do K-Pop - Premiação R$ 300,00</li>
                  <li><strong>Middle School:</strong> 3ª Geração do K-Pop - Premiação R$ 300,00</li>
                  <li><strong>New School:</strong> 4ª e 5ª Gerações do K-Pop - Premiação R$ 300,00</li>
                  <li>Grupos podem competir no máximo em duas chaves</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Apresentação:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Tempo máximo: 5 minutos</li>
                  <li>Coreografia pode ser adaptada, desde que 50% seja original</li>
                  <li>Check-in obrigatório até 13h no local do evento</li>
                  <li>Música em formato MP3 em pen-drive</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Critérios de Julgamento (Peso 2 cada):</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Originalidade</li>
                  <li>Expressão Artística</li>
                  <li>Sincronia</li>
                  <li>Figurino</li>
                  <li>Presença de Palco</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-accent mb-2">Proibições:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Palavrões, apelo sexual desnecessário, ofensas</li>
                  <li>Apologia a drogas, preconceito ou racismo</li>
                  <li>Uso de armas ou acessórios perigosos</li>
                  <li>Sujar o palco ou apresentar-se sob efeito de entorpecentes</li>
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
                            <Input placeholder="Nome do grupo K-Pop" {...field} className="bg-white/20 text-white border-white/30" />
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
                          <FormLabel className="text-white">Nome do Líder *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome completo do líder" {...field} className="bg-white/20 text-white border-white/30" />
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
                            <Input type="email" placeholder="email@exemplo.com" {...field} className="bg-white/20 text-white border-white/30" />
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
                      name="chave"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Chave de Competição *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 text-white border-white/30">
                                <SelectValue placeholder="Selecione a chave" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {chaves.map((chave) => (
                                <SelectItem key={chave.value} value={chave.value}>
                                  {chave.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
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
                            <Input type="number" min="3" max="10" placeholder="3 a 10" {...field} className="bg-white/20 text-white border-white/30" />
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
                            <Input placeholder="Nome da música K-Pop" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="artista"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Artista Original *</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome do artista/grupo original" {...field} className="bg-white/20 text-white border-white/30" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="integrantes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Lista de Integrantes *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Liste todos os integrantes (nome completo, um por linha)"
                            className="bg-white/20 text-white border-white/30 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="descricao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Descrição da Apresentação (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva brevemente a coreografia e o conceito da apresentação"
                            className="bg-white/20 text-white border-white/30 min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-accent/20 border-2 border-accent rounded-lg p-4 space-y-2">
                    <p className="text-white/90 text-sm font-bold">⚠️ Informações Importantes:</p>
                    <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                      <li>Taxa de inscrição: R$ 60,00 por pessoa</li>
                      <li>O pagamento garante a vaga e inclui entrada no evento</li>
                      <li>Em caso de desistência, não há reembolso</li>
                      <li>Você receberá instruções de pagamento por email após o envio</li>
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

export default ConcursoKpop;
