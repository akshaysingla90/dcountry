const axios = requrie('axios');

await axios
            .get(transcriptLink, )
            .then((response) => {
                      const voiceSpeech = await formatVimeoData(response.data);
                      const gptCentralData = JSON.parse(
                        JSON.stringify(lecture?.gpt_central_data)
                      );
                      await contextValue.prisma.lectures.update({
                        where: {
                          id:  args.id,
                        },
                        data: {
                          gpt_central_data: {
                            ...gptCentralData,
                            transcript: {
                              status: {
                                ...gptCentralData?.transcript?.status,
                                isGenerating: false,
                                isError: false,
                                message: "Transcript is generated",
                                lastGenerated: new Date(
                                  new Date(Date.now()).getTime() + 5.5 * 60 * 60 * 1000
                                )
                                  .toISOString()
                                  .slice(0, 19)
                                  .replace("T", " "),
                              },
                              published: true,
                              voiceSpeech,
                            },
                          },
                        },
                      });
                    }
                  }
                );
              });
            });